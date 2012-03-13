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
        Runs = new List<dynamic>()
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

      return model;
    }
  }
}