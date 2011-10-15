using System;
using System.Collections.Generic;

namespace GrokMob.Domain {
  public class Meeting {
    public virtual Guid Id { get; set; }
    public virtual String Title { get; set; }
    public virtual String Description { get; set; }
    public virtual DateTime ScheduledFor { get; set; }
    public virtual String Location { get; set; }

    public virtual IList<Comment> Comments { get; set; }
  }
}