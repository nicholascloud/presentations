using System;
using System.IO;
using System.Net;

namespace HamstringFX.RaceService.data {
  internal class RemoteRaceStream : IDataStream {
    private const string DATA_ENDPOINT = "http://www.runningintheusa.com/RSS/RaceState.aspx?State=MO";

    public void Read(Action<Stream> onStreamOpened) {
      var client = new WebClient();
      using (var stream = client.OpenRead(DATA_ENDPOINT)) {
        onStreamOpened(stream);
      }
    }
  }
}