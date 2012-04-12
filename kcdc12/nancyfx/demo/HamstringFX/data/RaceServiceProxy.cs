using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using HamstringFX.model;
using Nancy.Json;

namespace HamstringFX.data {
  class RaceServiceProxy : IRaceServiceProxy {
    public RaceServiceProxy(string endpoint, string token) {
      _endpoint = endpoint;
      _token = token;
    }

    private readonly string _endpoint;
    private readonly string _token;
    private readonly JavaScriptSerializer _serializer = 
      new JavaScriptSerializer();

    public ICollection<Race> UpcomingRaces() {
      var client = new WebClient();
      client.Headers.Add("X-Hamstring-Token", _token);
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