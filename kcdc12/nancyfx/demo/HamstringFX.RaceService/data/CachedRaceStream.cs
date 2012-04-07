using System;
using System.IO;
using System.Reflection;

namespace HamstringFX.RaceService.data {
  internal class CachedRaceStream : IDataStream {
    private const string RESOURCE_PATH = "HamstringFX.RaceService.cache.races.xml";
    private readonly Assembly _assembly = Assembly.GetAssembly(typeof(CachedRaceStream));

    public void Read(Action<Stream> onStreamOpened) {
      using (var stream = _assembly.GetManifestResourceStream(RESOURCE_PATH)) {
        onStreamOpened(stream);
      }
    }
  }
}