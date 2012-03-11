desc 'Builds the GrokMob solution'
msbuild :build => ['version:assemblyinfo', 'configure:copy_config_files'] do |msb|
  msb.properties :configuration => ENV['mode'] || :Debug
  msb.targets :Clean, :Build
  msb.solution = "GrokMob/GrokMob.sln"
end