using System;

namespace GrokMob.Events {
  [Serializable]
  public class CommentAddedEvent {
    public String MemberHandle { get; set; }
    public String Comment { get; set; }
    public DateTime CreatedAt { get; set; }
  }
}