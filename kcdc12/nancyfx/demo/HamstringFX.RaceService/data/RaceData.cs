using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Xml.Linq;
using HamstringFX.RaceService.domain;

namespace HamstringFX.RaceService.data {
  public class RaceData : IRaceData {
    readonly IDataStream _remote = new RemoteRaceStream();
    readonly IDataStream _cached = new CachedRaceStream();
     
    public ICollection<Race> UpcomingRaces() {

      try {
        return ReadRaces(_remote);
      } catch (Exception ex) {
        Debug.WriteLine(ex.Message);
        return ReadRaces(_cached);
      }
    }

    private ICollection<Race> ReadRaces (IDataStream dataStream) {
      var races = new List<Race>();
      dataStream.Read(s => {
        var xml = XDocument.Load(s);
        races = xml.Descendants("item").Select(i => 
          new Race(i.Element("title").Value, i.Element("link").Value))
        .OrderBy(r => r.ScheduledAt)
        .ToList();
      });
      return races;
    }
  }
}