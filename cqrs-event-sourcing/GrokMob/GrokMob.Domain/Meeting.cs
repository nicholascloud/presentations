using System;
using System.Collections.Generic;
using GrokMob.Events;
using Ncqrs.Domain;

namespace GrokMob.Domain {
  public class Meeting : AggregateRootMappedByConvention {
    private String _description;
    private String _location;
    private DateTime _scheduledFor;
    private String _title;

    private ISet<Comment> _comments = new HashSet<Comment>();

    public Meeting() {
    }

    public Meeting(Guid meetingId, String title, String description, String location, DateTime scheduledFor)
      : base(meetingId) {

      var @event = new MeetingScheduledEvent {
        MeetingId = meetingId,
        Title = title,
        Description = description,
        Location = location,
        ScheduledFor = scheduledFor
      };

      ApplyEvent(@event);
    }

    protected void OnMeetingScheduled(MeetingScheduledEvent @event) {
      _title = @event.Title;
      _description = @event.Description;
      _location = @event.Location;
      _scheduledFor = @event.ScheduledFor;
    }

    public void AddComment(string memberHandle, string comment) {

      var @event = new CommentAddedEvent {
        Comment = comment,
        MemberHandle = memberHandle,
        CreatedAt = DateTime.Now
      };

      ApplyEvent(@event);
    }

    public void OnAddComment(CommentAddedEvent @event) {

      var comment = new Comment(this, @event.MemberHandle, @event.Comment, @event.CreatedAt);
      _comments.Add(comment);
    }
  }
}