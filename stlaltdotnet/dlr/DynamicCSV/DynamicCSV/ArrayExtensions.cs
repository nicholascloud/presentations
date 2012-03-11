using System;
using System.Text;

namespace DynamicCSV {
    public static class ArrayExtensions {
        
        public static String[] ReplaceAll(this String[] @this, String search, String replace) {
            for(int i = 0; i < @this.Length; i++) {
                @this[i] = @this[i].Replace(search, replace);
            }
            return @this;
        }

        public static String PrettyPrint(this String[] @this) {
            var b = new StringBuilder("[");
            for(int i = 0; i < @this.Length; i++) {
                b.Append(String.Format(" |{0}| => {1},", i, @this[i]));
            }
            return b.ToString().TrimEnd(',') + " ]";
        }
    }
}