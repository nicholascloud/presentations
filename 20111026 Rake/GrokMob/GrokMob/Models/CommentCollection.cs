using System;
using System.Collections.Generic;

namespace GrokMob.Models {
  public class CommentCollection : List<Comment> {
    public CommentCollection(IEnumerable<Comment> comments, Int32 chopLength = 0) {
      _chopLength = chopLength;
      this.AddRange(comments);
    }

    private readonly int _chopLength;

    public Int32 ChopLength {
      get { return _chopLength; }
    }
  }
}