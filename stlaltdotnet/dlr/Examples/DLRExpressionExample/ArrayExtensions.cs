using System;
using System.Text;

namespace DLRExpressionExample {
    static class ArrayExtensions {
        public static String PrettyPrint<T>(this T[] @this) {
            var b = new StringBuilder();
            Array.ForEach(@this, i => b.Append(i.ToString()).Append(","));
            return b.ToString().TrimEnd(',');
        }
    }
}