using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace md5fx {
  class Program {
    static void Main(string[] args) {
      if (args.Length == 0) {
        Console.WriteLine(Usage());
        return;
      }

      //http://msdn.microsoft.com/en-us/library/system.security.cryptography.md5.aspx
      using (var md5 = MD5.Create()) {
        var bytes = md5.ComputeHash(Encoding.UTF8.GetBytes(args[0]));
        var builder = new StringBuilder();
        for (int i = 0; i < bytes.Length; i++) {
          builder.Append(bytes[i].ToString("x2"));
        }
        Console.WriteLine(builder.ToString());
      }
    }

    private static String Usage() {
      return "USAGE: md5fx [string to hash]";
    }
  }
}
