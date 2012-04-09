using System.Collections.Generic;

namespace HamstringFX.RaceService {
  public class CliArgs {
    public CliArgs(IEnumerable<string> args) {
      _args = new List<string>(args);
    }

    private readonly List<string> _args;

    public bool LaunchBrowser {
      get { return _args.Contains("--browser"); }
    }

    public bool AlwaysUseCache {
      get { return _args.Contains("--cached"); }
    }
  }
}