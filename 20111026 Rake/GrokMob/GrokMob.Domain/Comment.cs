using System;

namespace GrokMob.Domain {
  public class Comment {
    public virtual Guid Id { get; set; }
    public virtual Guid MeetingId { get; set; }
    public virtual String MemberHandle { get; set; }
    public virtual String Content { get; set; }
    public virtual DateTime CreatedAt { get; set; }
  }
}