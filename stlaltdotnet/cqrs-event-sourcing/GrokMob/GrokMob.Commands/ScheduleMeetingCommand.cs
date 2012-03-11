using System;
using Ncqrs.Commanding;

namespace GrokMob.Commands {
  public class ScheduleMeetingCommand : CommandBase {
    public Guid MeetingId { get; set; }
    public String Title { get; set; }
    public String Description { get; set; }
    public String Location { get; set; }
    public DateTime ScheduledFor { get; set; }
  }
}