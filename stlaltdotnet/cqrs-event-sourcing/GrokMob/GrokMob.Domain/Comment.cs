using System;

namespace GrokMob.Domain {
  public class Comment {
    private readonly Meeting _meeting;
    private readonly string _memberHandle;
    private readonly string _comment;
    private readonly DateTime _createdAt;

    public Comment(Meeting meeting, String memberHandle, String comment, DateTime createdAt) {
      _meeting = meeting;
      _memberHandle = memberHandle;
      _comment = comment;
      _createdAt = createdAt;
    }
  }
}