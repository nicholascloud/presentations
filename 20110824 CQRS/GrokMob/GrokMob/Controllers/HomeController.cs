using System;
using System.Collections.Generic;
using System.Web.Mvc;
using GrokMob.Commands;
using GrokMob.Models;
using GrokMob.ReadModel;
using NHibernate;
using Ncqrs.Commanding.ServiceModel;

namespace GrokMob.Controllers {
  public class HomeController : Controller {
    public HomeController(ICommandService commandService, ISession readModel) {
      _commandService = commandService;
      _readModel = readModel;
    }

    private readonly ICommandService _commandService;
    private readonly ISession _readModel;

    public ActionResult Dashboard() {
      var recentComments = _readModel.QueryOver<MeetingComment>()
        .OrderBy(a => a.CreatedAt).Desc
        .Take(10)
        .List();

      var futureMeetings = _readModel.QueryOver<Meeting>()
        .OrderBy(m => m.ScheduledFor).Desc
        .Take(10)
        .List();

      var venues = _readModel.QueryOver<Venue>()
        .OrderBy(v => v.Name).Asc
        .List();

      return View(new DashboardViewData(venues, recentComments, futureMeetings));
    }

    [ActionName("schedule-meeting")]
    public ActionResult ScheduleMeeting(ScheduleMeetingCommand command) {
      if (!ModelState.IsValid) {
        //display error
      }

      try {
        command.MeetingId = Guid.NewGuid();
        _commandService.Execute(command);
      } catch {
        ModelState.AddModelError("model", "An error occured while dispatching the command");
      }

      return Redirect(Url.Action("dashboard", "Home"));
    }

    public ActionResult Meeting(Guid id) {
      var meetingViewData = new MeetingViewData();

      meetingViewData.Meeting = _readModel.QueryOver<Meeting>()
        .Where(m => m.Id == id)
        .SingleOrDefault();

      meetingViewData.Comments = _readModel.QueryOver<MeetingComment>()
        .Where(c => c.MeetingId == id)
        .OrderBy(c => c.CreatedAt).Desc
        .List();

      return View("meeting", meetingViewData);
    }

    [HttpPost]
    [ActionName("add-comment")]
    public ActionResult AddComment(AddCommentCommand command) {
      try {
        _commandService.Execute(command);
      } catch (Exception ex) {
        ViewBag.Error = ex.Message;
        return Meeting(command.MeetingId);
      }

      return Redirect(Url.Action("meeting", new { id = command.MeetingId }));
    }
  }
}