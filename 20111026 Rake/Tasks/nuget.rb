namespace :nuget do
  
  nugetpack :pack do |nuget|
    nuget.command = './GrokMob/packages/NuGet.CommandLine.1.5.21005.9019/tools/NuGet.exe'
    nuget.nuspec = './GrokMob/GrokMob.Pester/Package.nuspec'
    nuget.basefolder = './GrokMob/GrokMob.Pester'
    nuget.output = './Pack'
  end
end