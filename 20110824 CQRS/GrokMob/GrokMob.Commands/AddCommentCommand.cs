using System;
using Ncqrs.Commanding;
using Ncqrs.Commanding.CommandExecution.Mapping.Attributes;

namespace GrokMob.Commands {
  public class AddCommentCommand : CommandBase {
    public Guid MeetingId { get; set; }
    public String MemberHandle { get; set; }
    public String Comment { get; set; }
  }
}