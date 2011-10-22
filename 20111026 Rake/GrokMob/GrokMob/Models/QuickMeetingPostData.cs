using System;

namespace GrokMob.Models {
  public class QuickMeetingPostData {
    public String Title { get; set; }
    public String Description { get; set; }
    public DateTime ScheduledFor { get; set; }
    public String Location { get; set; }
  }
}