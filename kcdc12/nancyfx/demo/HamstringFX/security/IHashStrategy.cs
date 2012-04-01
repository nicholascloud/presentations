using System;

namespace HamstringFX.security {
  public interface IHashStrategy {
    bool Matches(String plainText, String hashText);
  }
}