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