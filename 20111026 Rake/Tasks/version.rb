namespace :version do

  desc 'Updates the SharedAssemblyInfo.cs file'
  assemblyinfo :assemblyinfo do |asm|
    shared_info = './GrokMob/Common/SharedAssemblyInfo.cs'
    asm.input_file = shared_info
    asm.output_file = shared_info
    # M.m.B.R
    asm.version = GrokMob::current_version()
    asm.file_version = ENV['file_version'] || asm.version
  end

  desc 'Increments the assembly version'
  exec :increment do |cmd|
    # if the versioner tool has not been built, build it anc
    # copy it to the tools directory
    if !Dir.exists? ('./Tools/Versioner/') then
      Rake::Task['version:build_versioner'].invoke()
      Rake::Task['version:copy_versioner'].invoke()
    end

    # if the version file does not exist, create a new one
    # and initialize it with version 0.0.0.0
    file = File.expand_path(GrokMob::VERSION_FILE)
    if !File.exists? (file) then
      File.open(file, 'w') { |f| f.write('0.0.0.0') }
    end
    
    increment = ENV['increment'] || 'build'
    cmd.command = './Tools/Versioner/versioner.exe'
    cmd.parameters = ["\"--file=#{file}\"", "--increment=#{increment}"]
  end

  msbuild :build_versioner do |msb|
    msb.properties :configuration => ENV['mode'] || :Debug
    msb.targets :Clean, :Build
    msb.solution = "GrokMob/GrokMob.Versioner/GrokMob.Versioner.csproj"
  end

  task :copy_versioner do
    mode = ENV['mode'] || :Debug
    build_path = "./GrokMob/GrokMob.Versioner/bin/#{mode}/"
    output_path = "./Tools/Versioner/"
    if Dir.exists? output_path then
      FileUtils.remove_dir(output_path, true)
    end
    FileUtils.cp_r(build_path, output_path)
  end

  desc 'Prints the current version'
  task :current do
    puts GrokMob::current_version()
  end
end