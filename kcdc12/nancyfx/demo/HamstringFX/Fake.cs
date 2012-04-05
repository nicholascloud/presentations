using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using HamstringFX.data;

namespace HamstringFX {
  internal static class Fake {

    public static dynamic HamstringModel (IHamstringData db, Member member) {

      var model = new {
        BestRouteTime = TimeSpan.FromMinutes(25).ToString(),
        RunningRoutes = db.Routes.OrderBy(r => r.Name),
        Runs = db.Runs
          .Where(r => r.MemberId == member.Id)
          .OrderByDescending(r => r.ScheduledAt)
          .Select(r => new {
            r.Id,
            r.Duration,
            r.ScheduledAt,
            RouteName = r.Route.Name, 
            r.Route.Distance
          }).ToList(),
        Playlists = db.Playlists
          .Where(p => p.MemberId == member.Id)
          .OrderBy(p => p.Name)
          .Select(p => new {
            p.Name,
            p.Duration,
            p.SongCount,
            p.Image
          }).ToList(),
        IsLoggedIn = true,
        MemberName = "ncloud"
      };
      
      return model;
    }
  }
}