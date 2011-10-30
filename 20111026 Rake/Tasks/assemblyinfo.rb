desc 'Builds a common assembly info file'
assemblyinfo :assemblyinfo do |asm|
  shared_info = './GrokMob/Common/SharedAssemblyInfo.cs'
  asm.input_file = shared_info
  asm.output_file = shared_info
  # M.m.B.R
  asm.version = ENV['version'] || '1.0.0.0'
  asm.file_version = ENV['file_version'] || ENV['version'] || '1.0.0.0'
end