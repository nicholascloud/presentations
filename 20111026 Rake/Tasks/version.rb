namespace :version do

  desc 'Builds a common assembly info file'
  assemblyinfo :assemblyinfo => 'version:increment' do |asm|
    version_file = './GrokMob/Common/version'
    shared_info = './GrokMob/Common/SharedAssemblyInfo.cs'
    asm.input_file = shared_info
    asm.output_file = shared_info
    # M.m.B.R
    asm.version = ENV['version'] || read_version(version_file)
    asm.file_version = ENV['file_version'] || ENV['version'] || read_version(version_file)
  end

  exec :increment => ['version:build_versioner', 'version:copy_versioner'] do |cmd|
    file = File.expand_path(ENV['file'] || './GroMob/Common/version')
    increment = ENV['increment'] || 'build'
    cmd.command = './Tools/Versioner/versioner.exe'
    cmd.parameters = ["--file:#{file}", "--increment:#{increment}", "> #{file}"]
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
    FileUtils.cp_r build_path, output_path
  end

end

def read_version(file)
  File.open(file, 'r') do |f|
    return f.gets
  end
end