using System;
using System.Collections.Generic;

namespace GrokMob.Versioner {
  internal class Arguments : Dictionary<string, string> {

    public Arguments(String[] args) {
      Array.ForEach(args, a => {
        String[] parts = a.Split(':');
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

    public IDictionary<String, String> InvalidArgs() {
      var invalid = new Dictionary<String, String>();
      if(!ContainsKey("--file")) {
        invalid.Add("file", "You must specify a file");
      } else {
        if(String.IsNullOrEmpty(this["--file"])) {
          invalid.Add("file", "You must specify a valid file");
        }
        if(!System.IO.File.Exists(this["--file"])) {
          invalid.Add("file", "The file does not exist");
        }
      }
      return invalid;
    } 
  }
}