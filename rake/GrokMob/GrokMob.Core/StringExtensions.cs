using System;
using System.Text;

namespace GrokMob.Core {
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

    public static String Repeat(this String @this, Int32 times) {
      if(times <= 0) {
        return String.Empty;
      }
      if(times == 1) {
        return @this;
      }
      var b = new StringBuilder();
      Int32 count = 0;
      while(++count <= times) {
        b.Append(@this);
      }
      return b.ToString();
    }
  }
}