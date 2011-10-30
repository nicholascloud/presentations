desc 'Deploys the site'
task :deploy => [:publish, :compress] do |t|
end