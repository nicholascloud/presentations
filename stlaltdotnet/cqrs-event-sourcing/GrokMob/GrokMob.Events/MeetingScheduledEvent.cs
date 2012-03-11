using System;
using Ncqrs.Eventing.Sourcing;

namespace GrokMob.Events {
  [Serializable]
  public class MeetingScheduledEvent : SourcedEvent {
    public Guid MeetingId { get; set; }
    public String Title { get; set; }
    public String Description { get; set; }
    public DateTime ScheduledFor { get; set; }
    public String Location { get; set; }
  }
}