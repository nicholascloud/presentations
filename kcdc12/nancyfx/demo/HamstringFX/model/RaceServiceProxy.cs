using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using Nancy.Json;

namespace HamstringFX.model {
  class RaceServiceProxy : IRaceServiceProxy {
    public RaceServiceProxy(String endpoint) {
      _endpoint = endpoint;
    }

    private readonly string _endpoint;
    private readonly JavaScriptSerializer _serializer = 
      new JavaScriptSerializer();

    public ICollection<Race> UpcomingRaces() {
      var client = new WebClient();
      using(var stream = client.OpenRead(_endpoint + "/races")) {
        using(var reader = new StreamReader(stream)) {
          var content = reader.ReadToEnd();
          var output = _serializer.Deserialize<Race[]>(content);
          return output;
        }
      }
    }
  }
}