desc 'Publishes web application to /Publish/[version]'
msbuild :publish do |msb|
  ENV['mode'] = ENV['mode'] || 'release'
  ENV['env'] = ENV['env'] || 'prod'
  Rake::Task['build'].invoke
  version = GrokMob::current_version()
  msb.properties :Configuration => :Release, :WebProjectOutputDir => "../../Publish/#{version}/", 
    :outdir => "../../Publish/#{version}/"
  msb.targets :ResolveReferences, :_CopyWebApplication
  msb.solution = './GrokMob/GrokMob/GrokMob.csproj'
end