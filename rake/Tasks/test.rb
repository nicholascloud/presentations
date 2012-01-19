namespace :test do

  desc 'Runs all unit tests'
  nunit :unit do |nunit|
    mode = ENV['mode'] || :Debug
    test_root = './GrokMob/UnitTests'
    nunit.command = './GrokMob/packages/NUnit.2.5.10.11092/tools/nunit-console.exe'
    nunit.options "/labels /out=#{test_root}/TestResults.txt /xml=#{test_root}/TestResults.xml /err:#{test_root}/TestErrors.txt"
    nunit.assemblies = []
    nunit.assemblies << "#{test_root}/GrokMob.Domain.UnitTests/bin/#{mode}/GrokMob.Domain.UnitTests.dll"
    nunit.assemblies << "#{test_root}/GrokMob.Core.UnitTests/bin/#{mode}/GrokMob.Core.UnitTests.dll"
  end
end