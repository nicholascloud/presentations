using System;
using System.Collections.Generic;
using System.Linq;

namespace GrokMob.Models {
  public class MeetingsCollection : List<Meeting> {

    public MeetingsCollection(ICollection<Meeting> allMeetings) {
      AddRange(allMeetings);
    }

    public ICollection<Meeting> FutureMeetings { 
      get {
        return this.Where(m => m.ScheduledFor >= DateTime.Now)
          .OrderBy(m => m.ScheduledFor)
          .ToList();
      }
    }

    public ICollection<Meeting> PastMeetings {
      get {
        return this.Where(m => m.ScheduledFor < DateTime.Now)
          .OrderByDescending(m => m.ScheduledFor)
          .ToList();
      }
    } 
  }
}