using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using GrokMob.Domain;

namespace GrokMob.Versioner {
  class Program {

    static void Main(string[] args) {
      var arguments = new Arguments(args);
      if(arguments.InvalidArgs().Any()) {
        foreach(var arg in arguments.InvalidArgs()) {
          Console.WriteLine("--{0} : {1}", arg.Key, arg.Value);
        }
        return;
      }

      String versionText = File.ReadAllText(arguments.File).Trim();
      var version = RedmondVersion.Parse(versionText);

      switch(arguments.Increment) {
        case "major":
          version.IncrementMajor();
          break;
        case "minor":
          version.IncrementMinor();
          break;
        case "build":
          version.IncrementBuild();
          break;
        case "revision":
        default:
          version.IncrementRevision();
          break;
      }

      Console.Write(version.ToString());
    }
  }
}
