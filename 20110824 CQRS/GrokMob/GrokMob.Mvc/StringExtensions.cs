using System;

namespace GrokMob.Mvc {
  public static class StringExtensions {
    public static String Chop(this String @this, int length, bool includeElipses = true) {
      const String elipses = "...";
      
      if(includeElipses) {
        length -= 3;
      }

      if(length <= 0) {
        return (includeElipses ? elipses : String.Empty);
      }

      if(@this.Length < length) {
        return @this;
      }

      return @this.Substring(0, length) + (includeElipses ? elipses : String.Empty);
    }
  }
}