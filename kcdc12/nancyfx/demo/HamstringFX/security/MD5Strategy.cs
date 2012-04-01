using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace HamstringFX.security {
  public class MD5Strategy : IHashStrategy {
    public bool Matches(string plainText, string hashText) {
      using (var md5 = MD5.Create()) {
        var bytes = md5.ComputeHash(Encoding.UTF8.GetBytes(plainText)).ToList();
        var builder = new StringBuilder();
        bytes.ForEach(b => builder.Append(b.ToString("x2")));
        String encodedText = builder.ToString();
        return (String.Compare(encodedText, hashText, StringComparison.OrdinalIgnoreCase) == 0);
      }
    }
  }
}