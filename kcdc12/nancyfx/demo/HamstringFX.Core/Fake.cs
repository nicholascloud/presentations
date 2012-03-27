using System;
using System.Collections.Generic;
using HamstringFX.Core.extension;
using HamstringFX.Core.models;
using PetaPoco;

namespace HamstringFX.Core {
  internal static class Fake {



    private class Route {
      public Guid Id { get; set; }
    }

    public static dynamic HamstringModel (Database db) {

      var model = new {
        RunningRoutes = db.Fetch<Route>("order by Name asc"),
        Runs = db.Fetch<Run>("select rn.* from Runs as rn join Routes as rt on rn.RouteId = rt.id order by rn.ScheduledAt desc"),
        Playlists = new List<dynamic>()
      };

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