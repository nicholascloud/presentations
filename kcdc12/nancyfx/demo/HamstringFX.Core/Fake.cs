using System;
using System.Collections.Generic;
using HamstringFX.Core.extension;

namespace HamstringFX.Core {
  internal static class Fake {



    private class Route {
      public Guid Id { get; set; }
    }

    public static dynamic HamstringModel (dynamic db) {

      var model = new {
        RunningRoutes = db.Routes.All().OrderByName(),
        Runs = db.Runs.Query()
          .Join(db.Routes, Id: db.Runs.LocationId)
          .Select(db.Runs.Id, 
            db.Runs.RouteId,
            db.Routes.Name.As("Route"),
            db.Runs.ScheduledAt, 
            db.Runs.Hours, 
            db.Runs.Minutes, 
            db.Runs.Seconds),
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