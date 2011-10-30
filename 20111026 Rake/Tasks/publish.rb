desc "Publishes web application"
msbuild :publish do |msb|
  ENV['mode'] = ENV['mode'] || 'release'
  ENV['env'] = ENV['env'] || 'prod'
  Rake::Task['build'].invoke
  msb.properties :configuration => :Release, :webprojectoutputdir => '../../Publish/GrokMob/', :outdir => '../../Publish/GrokMob/'
  msb.targets :ResolveReferences, :_CopyWebApplication
  msb.solution = './GrokMob/GrokMob/GrokMob.csproj'
end