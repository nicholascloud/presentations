desc 'Compress the build output'
zip :compress do |zip|
  zip.directories_to_zip = ['./Publish/GrokMob']
  zip.additional_files = './Documentation/gpl-3.0.txt', './Documentation/README.md'
  zip.output_file = 'GrokMob.zip'
  zip.output_path = './Publish'
end