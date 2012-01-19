desc 'Compress the publish output'
zip :compress do |zip|
  version = ENV['version'] || GrokMob::current_version()
  zip.directories_to_zip = ["./Publish/#{version}"]
  zip.additional_files = './Documentation/gpl-3.0.txt', './Documentation/README.md'
  zip.output_file = "GrokMob-#{version}.zip"
  zip.output_path = './Publish'
end