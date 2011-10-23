using System;
using System.Net.Mail;
using System.Net.Mime;
using System.Web;
using System.Web.Mvc;
using GrokMob.Domain;
using GrokMob.Models;
using Growl.Connector;
using PetaPoco;

namespace GrokMob.Controllers {
  public class MeetingsController : GrokMobController {

    public MeetingsController(Database database)
      : base(database) {
    }

    public ActionResult Index() {

      var meetings = DB.Fetch<Meeting>("select * from Meeting");
      var collection = new MeetingsCollection(meetings);
      return View(collection);

    }

    public ActionResult Details(Int32 id) {

      var meeting = DB.First<Meeting>("where Id = @0", id);
      if (meeting == null) {
        throw new HttpException(500, "meeting-not-found");
      }

      var comments = DB.Fetch<Comment>("where MeetingId = @0", id);
      var meetingDetails = new MeetingDetails(meeting, comments);

      return View("details", meetingDetails);
    }

    [HttpPost]
    [ActionName("quick")]
    public ActionResult QuickMeeting(QuickMeetingPostData postData) {
      if (!ModelState.IsValid) {
        //display error
      }

      var meeting = new Meeting {
        Description = postData.Description,
        Title = postData.Title,
        Location = postData.Location,
        ScheduledFor = postData.ScheduledFor
      };

      DB.Insert(meeting);

      GrowlConnector connector = new GrowlConnector();
      Application growlApp = new Application("GrokMob");
      NotificationType type = new NotificationType("grokmob-quick-meeting");
      connector.Register(growlApp, new[] { type });

      var growlPester = new GrowlPesterQueue(growlApp.Name, connector);
      growlPester.QueueUp(new GrowlMessage("New meeting cheduled", meeting.ToString()));
      var pesterQueue = new Pester.PesterQueue();
      pesterQueue.Enqueue(growlPester);

      var emailPester = new EmailPester(
        new MailMessage("grokmob@stlalt.net", "meetings@stlalt.net", "New meeting!", meeting.ToString()));
      pesterQueue.Enqueue(emailPester);
      
      pesterQueue.LetEmHaveIt();

      return Redirect(Url.Action("index", "dashboard"));
    }

    [HttpPost]
    [ActionName("comment")]
    public ActionResult AddComment(CommentPostData postData) {
      if (!ModelState.IsValid) {
        //display error
      }

      if (!DB.Exists<Meeting>(postData.MeetingId)) {
        throw new HttpException(500, "meeting-not-found");
      }

      var comment = new Comment {
        MeetingId = postData.MeetingId,
        Content = postData.Comment,
        CreatedAt = DateTime.Now,
        MemberHandle = postData.MemberHandle
      };

      DB.Insert(comment);

      return Redirect(Url.Action("details", "meetings", new { id = postData.MeetingId }));
    }
  }
}