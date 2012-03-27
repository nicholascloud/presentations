using System;

namespace HamstringFX.extension {
  static class ArrayExtensions {

    private static readonly Random _random = new Random ();

    public static T Random<T>(this T[] @this) {
      if (@this == null) {
        throw new NullReferenceException();
      }
      if (@this.Length == 0) {
        throw new IndexOutOfRangeException();
      }
      return @this[_random.Next (0, @this.Length - 1)];
    }
  }
}
