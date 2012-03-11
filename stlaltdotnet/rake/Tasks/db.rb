desc 'Database migration tasks'
namespace :db do

  desc 'Builds the database migration project'
  msbuild :build do |msb|
    msb.properties :configuration => ENV['mode'] || :Debug
    msb.targets :Clean, :Build
    msb.solution = "GrokMob/GrokMob.SchemaMigration.sln"
  end

  desc 'Creates the database'
  sqlcmd :create do |sql|
    sql.command = 'sqlcmd.exe'
    sql.server = 'localhost'
    # sql.database = 'some_database'
    # sql.username = 'some_user'
    # sql.password = "SHH!!! it's a secret!"
    # sql.variables :New_DB_Name => "Albacore_Test"
    sql.scripts './GrokMob/GrokMob.SchemaMigration/Scripts/CreateDatabase.sql'
  end

  sqlcmd :drop do |sql|
    sql.command = 'sqlcmd.exe'
    sql.server = 'localhost'
    # sql.database = 'some_database'
    # sql.username = 'some_user'
    # sql.password = "SHH!!! it's a secret!"
    # sql.variables :New_DB_Name => "Albacore_Test"
    sql.scripts './GrokMob/GrokMob.SchemaMigration/Scripts/DropDatabase.sql'
  end

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
  fluentmigrator :migrate, [:task, :version, :steps] => ['db:build'] do |mig, args|
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