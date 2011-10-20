#  Rakefile
require 'albacore'
require 'FileUtils'

task :default do
  puts 'Helpful info here'
end

desc 'Builds the solution'
msbuild :build => [:assemblyinfo, 'configure:copy_config_files'] do |msb|
  msb.properties :configuration => ENV['mode'] || :Debug
  msb.targets :Clean, :Build
  msb.solution = "GrokMob/GrokMob.sln"
end

msbuild :build_schema do |msb|
  msb.properties :configuration => ENV['mode'] || :Debug
  msb.targets :Clean, :Build
  msb.solution = "GrokMob/GrokMob.SchemaMigration.sln"
end

namespace :configure do

  desc 'Convenience configuration task for dev environment'
  task :dev do
    Rake::Task['configure:copy_config_files'].invoke('dev')
  end

  desc 'Convenience configuration task for prod environment'
  task :prod do
    Rake::Task['configure:copy_config_files'].invoke('prod')
  end

  desc 'Copies configuration files to the web directory'
  task :copy_config_files, :env do |t, args|
    env = (args[:env] || ENV['env'] || 'dev').downcase
    source = "./GrokMob/Configuration/#{env}"
    dest = './GrokMob/GrokMob'
    files = []
    files << "#{source}/appSettings.config"
    files << "#{source}/connectionStrings.config"
    files << "#{source}/log4net.config"
    files.each do |file|
      FileUtils.cp file, dest, :verbose => true
    end
  end
end

desc 'Builds a common assembly info file'
assemblyinfo :assemblyinfo do |asm|
  shared_info = './GrokMob/Common/SharedAssemblyInfo.cs'
  asm.input_file = shared_info
  asm.output_file = shared_info
  # M.m.B.R
  asm.version = ENV['version'] || '1.0.0.0'
  asm.file_version = ENV['file_version'] || ENV['version'] || '1.0.0.0'
end

desc "Publishes web application"
msbuild :publish do |msb|
  ENV['mode'] = ENV['mode'] || 'release'
  ENV['env'] = ENV['env'] || 'prod'
  Rake::Task['build'].invoke
  msb.properties :configuration => :Release, :webprojectoutputdir => '../../Publish/GrokMob/', :outdir => '../../Publish/GrokMob/'
  msb.targets :ResolveReferences, :_CopyWebApplication
  msb.solution = './GrokMob/GrokMob/GrokMob.csproj'
end

desc 'Compress the build output'
zip :compress do |zip|
  zip.directories_to_zip = ['./Publish/GrokMob']
  zip.additional_files = './Documentation/gpl-3.0.txt', './Documentation/README.md'
  zip.output_file = 'GrokMob.zip'
  zip.output_path = './Publish'
end

desc 'Deploys the site'
task :deploy => [:publish, :compress] do |t|
end

namespace :test do

  desc 'Runs all unit tests'
  nunit :unit do |nunit|
    mode = ENV['mode'] || :Debug
    test_root = './GrokMob/UnitTests'
    nunit.command = './GrokMob/packages/NUnit.2.5.10.11092/tools/nunit-console.exe'
    nunit.options "/labels /out=#{test_root}/TestResults.txt /xml=#{test_root}/TestResults.xml /err:#{test_root}/TestErrors.txt"
    nunit.assemblies = []
    nunit.assemblies << "#{test_root}/GrokMob.Domain.UnitTests/bin/#{mode}/GrokMob.Domain.UnitTests.dll"
  end

end

desc 'Database migration tasks'
namespace :db do

  desc 'Migrates the database up to its greatest version'
  task :up do
    Rake::Task['db:migrate'].invoke('migrate:up', ENV['version'] || 0, nil)
  end

  desc 'Migrates the database down to version 0'
  task :down do
    Rake::Task['db:migrate'].invoke('migrate:down', ENV['version'] || 0, nil)
  end

  desc 'Rolls back the database a specific number of steps (default is 1)'
  task :rollback do
    Rake::Task['db:migrate'].invoke('rollback', 0, ENV['steps'] || 1)
  end

  desc 'Rolls back the database to a specific version (default is 0)'
  task :rollbackversion do
    Rake::Task['db:migrate'].invoke('rollback:toversion', ENV['version'] || 0, nil)
  end

  desc 'Rolls back the entire database'
  task :rollbackall do
    Rake::Task['db:migrate'].invoke('rollback:all')
  end

  desc 'Migrates the database'
  fluentmigrator :migrate, [:task, :version, :steps] => [:build_schema] do |mig, args|
    args.with_defaults(:task => ENV['task'] || 'migrate:up', :preview => (ENV['preview'] == 'true') || false)
    mode = ENV['mode'] || :Debug
    instance = ENV['instance'] || 'sqlexpress'
    mig.command = './GrokMob/packages/FluentMigrator.Tools.1.0.1.0/tools/AnyCPU/40/Migrate.exe'
    mig.provider = 'sqlserver2008'
    mig.target = "./GrokMob/GrokMob.SchemaMigration/bin/#{mode}/GrokMob.SchemaMigration.dll"
    #mig.connection = "Server=localhost\\#{instance};Database=GrokMob;Trusted_Connection=True;"
    mig.connection = "Server=localhost;Database=GrokMob;Trusted_Connection=True;"
    mig.verbose = true
    mig.task = args[:task]
    mig.preview = args[:preview]
    if args[:task] == 'rollback' then
      mig.steps = args[:steps]
    end
    if args[:task] == 'rollback:toversion' then
      mig.version = args[:version]
    end
    
  end

end
