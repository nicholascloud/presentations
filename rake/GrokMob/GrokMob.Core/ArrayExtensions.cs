using System;

namespace GrokMob.Core {
  public static class ArrayExtensions {
    
    public static T At<T>(this T[] @this, int index, T @default) {
      if(index < 0 || index >= @this.Length) {
        return @default;
      }
      return @this[index];
    }

    public static TTo[] Map<TTo, TFrom>(this TFrom[] @this, Func<TFrom, TTo> convertTo) {
      TTo[] to = new TTo[@this.Length];
      for (int i = 0; i < @this.Length; i++) {
        to[i] = convertTo(@this[i]);
      }
      return to;
    }

    public static void Each<T>(this T[] @this, Action<T> action) {
      Array.ForEach(@this, action);
    }
  }
}