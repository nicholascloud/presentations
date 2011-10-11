using System;

namespace GrokMob.ReadModel {
  public class MeetingComment {
    public virtual Guid Id { get; set; }
    public virtual Guid MeetingId { get; set; }
    public virtual String MemberHandle { get; set; }
    public virtual String Comment { get; set; }
    public virtual DateTime CreatedAt { get; set; }
  }
}