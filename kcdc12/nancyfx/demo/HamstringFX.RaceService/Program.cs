using System;
using System.Diagnostics;
using Nancy.Hosting.Self;

namespace HamstringFX.RaceService {
  class Program {
    static void Main(string[] args) {
      var cliargs = new CliArgs(args);

      var uri = new Uri("http://localhost:8087/");
      var host = new NancyHost(uri, new RaceServiceBootstrapper(cliargs));
      host.Start();

      Console.WriteLine(String.Format("HamstringFX.RaceService now listening on {0}", uri.OriginalString));
      Console.WriteLine("Press any key to terminate");

      if (cliargs.LaunchBrowser) {
        Process.Start(uri.OriginalString);
      }

      Console.ReadKey();

      host.Stop();
      Console.WriteLine("HamstringFX.RaceService terminated");
    }
  }
}
