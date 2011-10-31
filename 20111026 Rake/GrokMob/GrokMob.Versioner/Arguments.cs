using System;
using System.Collections.Generic;
using InvalidArg = System.Tuple<System.String, System.String>;

namespace GrokMob.Versioner {
  internal class Arguments : Dictionary<string, string> {

    public Arguments(String[] args) {
      Array.ForEach(args, a => {
        String[] parts = a.Split('=');
        Add(parts[0], (parts.Length == 2 ? parts[1] : String.Empty));
      });
    }

    public String File {
      get { return this["--file"]; }
    }

    public String Increment {
      get {
        if(!ContainsKey("--increment") || String.IsNullOrEmpty(this["--increment"])) {
          return "revision";
        }
        return this["--increment"].ToLower();
      }
    }

    public Tuple<String, String>[] InvalidArgs() {
      var invalidArgs = new List<Tuple<String, String>>();
      if(!ContainsKey("--file")) {
        invalidArgs.Add(new InvalidArg("file", "You must specify a file"));
      } else {
        if(String.IsNullOrEmpty(this["--file"])) {
          invalidArgs.Add(new InvalidArg("file", "You must specify a valid file"));
        }
        if(!System.IO.File.Exists(this["--file"])) {
          invalidArgs.Add(new InvalidArg("file", "The file does not exist"));
        }
      }
      return invalidArgs.ToArray();
    }
  }
}