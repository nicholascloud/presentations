using System;
using System.Collections.Generic;
using HamstringFX.Core.extension;

namespace HamstringFX.Core {
  internal static class Fake {

    private static readonly String[] _routes = {
      "Old Town Florissant", "Creve Coeur Lake Park", "Miller's Trail", "The Bluffs"
    };

    public static dynamic HamstringModel () {
      var model = new {
        RunningRoutes = _routes,
        Runs = new List<dynamic>(),
        Playlists = new List<dynamic>()
      };

      for (var i = 0; i < 4; i++) {
        model.Runs.Add (new {
          When = "Friday, July 12, 2012",
          Where = _routes.Random(),
          Distance = "2.5 miles",
          YourTime = "23:00 mins.",
          BestRouteTime = "25:00 mins.",
          Difference = "2:00 mins."
        });
      }

      model.Playlists.Add(new {
        Name = "Thump Pop",
        Length = "07:24:03",
        Image = "playlist1.png"
      });

      model.Playlists.Add(new {
        Name = "Groove",
        Length = "25:40",
        Image = "playlist2.png"
      });

      model.Playlists.Add(new {
        Name = "Again With Feeling",
        Length = "02:00:30",
        Image = "playlist3.png"
      });

      model.Playlists.Add(new {
        Name = "Noise Canon",
        Length = "23:27",
        Image = "playlist4.png"
      });

      return model;
    }
  }
}