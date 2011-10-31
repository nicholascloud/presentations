#  Rakefile
require 'albacore'
require 'FileUtils'

FileList['./Tasks/*.rb'].each { |f| require f }

task :default do
  puts 'If you need help, run the command `rake -T` to list all available tasks.'
end