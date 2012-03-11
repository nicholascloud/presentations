using System;
using System.IO;
using System.Linq;
using System.Reflection;

namespace GrokMob.SchemaMigration {
  internal static class Resource {
    
    public static String Data(String name) {
      String location = String.Format("GrokMob.SchemaMigration.Data.{0}.sql", name.Replace(".sql", String.Empty));
      return Read(location);
    }

    private static String Read(String resourceLocation) {
      using (var stream = Assembly.GetAssembly(typeof(Resource)).GetManifestResourceStream(resourceLocation)) {
        using (var reader = new StreamReader(stream)) {
          return reader.ReadToEnd();
        }
      }
    }
  }
}