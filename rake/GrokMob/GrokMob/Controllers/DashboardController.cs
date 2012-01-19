using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GrokMob.Core;
using GrokMob.Domain;
using GrokMob.Models;

namespace GrokMob.Controllers {
  public class DashboardController : GrokMobController {
    public DashboardController(PetaPoco.Database database)
      : base(database) {
    }

    [ActionName("index")]
    public ActionResult Index() {

      var venues = DB.Fetch<Venue>("select * from Venue");
      var recentComments = DB.Fetch<Comment>("where CreatedAt >= @0",
        DateTime.Now.AddDays(-7))
        .Select(c => {
          c.Content = c.Content.Chop(40);
          return c;
        }).ToList();
      var futureMeetings = DB.Fetch<Meeting>("where ScheduledFor > @0", DateTime.Now);

      return View(new DashboardViewData(venues, recentComments, futureMeetings));
    }
  }
}