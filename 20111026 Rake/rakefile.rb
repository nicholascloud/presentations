#  Rakefile
require 'albacore'

task :default do
  puts 'Helpful info here'
end

desc 'Builds the solution'
msbuild :build => :assemblyinfo do |msb|
  msb.properties :configuration => ENV['mode'] || :Debug
  msb.targets :Clean, :Build
  msb.solution = "GrokMob/GrokMob.sln"
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

desc 'Builds a common assembly info file'
assemblyinfo :assemblyinfo do |asm|
  shared_info = './GrokMob/Common/SharedAssemblyInfo.cs'
  asm.input_file = shared_info
  asm.output_file = shared_info
  # M.m.B.R
  asm.version = ENV['version'] || '1.0.0.0'
  asm.file_version = ENV['file_version'] || ''
end

desc 'Deploys the site'
output :deploy do |o|
end



task :db do

  task :up do
  end

  task :down do
  end

  desc 'Migrates the database'
  fluentmigrator :migrate, :task do |mig, args|
    mode = ENV['mode'] || :Debug
    mig.command = './GrokMob/packages/FluentMigrator.Tools.1.0.1.0/tools/AnyCPU/40/Migrate.exe'
    mig.provider = 'sqlserver2008'
    mig.target = "./GrokMob/GrokMob.SchemaMigration/bin/#{mode}/GrokMob.SchemaMigration.dll"
    mig.connection = 'Server=localhost\sqlexpress;Database=GrokMob;Trusted_Connection=True;'
    mig.verbose = true
    mig.task = ENV['task'] || 'migrate:up'
  end

end
