desc 'Publishes web application to /Publish/[version]'
msbuild :publish do |msb|
  ENV['mode'] = ENV['mode'] || 'release'
  ENV['env'] = ENV['env'] || 'prod'
  Rake::Task['build'].invoke
  version = GrokMob::current_version()
  webdir = "../../Publish/#{version}/"
  msb.properties :Configuration => :Release, :WebProjectOutputDir => webdir, :OutDir => "#{webdir}/bin/"
  msb.targets :Rebuild
  msb.solution = './GrokMob/GrokMob/GrokMob.csproj'
end