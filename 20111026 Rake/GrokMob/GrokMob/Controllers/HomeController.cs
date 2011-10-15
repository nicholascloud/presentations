using System;
using System.Collections.Generic;
using System.Web.Mvc;
using GrokMob.Domain;
using GrokMob.Models;

namespace GrokMob.Controllers {
  public class HomeController : Controller {
    public HomeController() {
    }

    public ActionResult Dashboard() {
      throw new NotImplementedException();

      return View(/*new DashboardViewData(venues, recentComments, futureMeetings)*/);
    }

    [ActionName("schedule-meeting")]
    public ActionResult ScheduleMeeting(/*ScheduleMeetingCommand command*/) {
      if (!ModelState.IsValid) {
        //display error
      }

      throw new NotImplementedException();

      return Redirect(Url.Action("dashboard", "Home"));
    }

    public ActionResult Meeting(Guid id) {
      var meetingViewData = new MeetingViewData();

      throw new NotImplementedException();

      return View("meeting", meetingViewData);
    }

    [HttpPost]
    [ActionName("add-comment")]
    public ActionResult AddComment(/*AddCommentCommand command*/) {
      throw new NotImplementedException();
    }
  }
}