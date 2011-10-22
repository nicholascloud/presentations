using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using GrokMob.Models;
using PetaPoco;

namespace GrokMob.ActionFilters {
  public class StatsViewDataAttribute : ActionFilterAttribute {
    public StatsViewDataAttribute(Database database) {
      _db = database;
    }

    private readonly Database _db;

    private const String QUERY =
      @"
      select 
        (select count(*) from Member) as Members,
        (select count(*) from Sponsor) as Sponsors,
        (select count(*) from Meeting where ScheduledFor < @0) as PastMeetings,
        (select count(*) from Meeting where ScheduledFor >= @0) as FutureMeetings
      ";

    public override void OnActionExecuting(ActionExecutingContext filterContext) {

      var stats = (_db.Fetch<Stats>(QUERY, DateTime.Now)).First();
      var statsDict = new Dictionary<String, String> {
        { "members", stats.Members.ToString() },
        { "sponsors", stats.Sponsors.ToString() },
        { "past meetings", stats.PastMeetings.ToString() },
        { "future meetings", stats.FutureMeetings.ToString() }
      };
      filterContext.Controller.ViewData["Stats"] = statsDict;
    }
  }
}