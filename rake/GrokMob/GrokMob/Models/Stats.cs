using System;

namespace GrokMob.Models {
  public class Stats {
    public Stats() {
      Members = 0;
      Sponsors = 0;
      FutureMeetings = 0;
      PastMeetings = 0;
    }

    public Int32 Members { get; set; }
    public Int32 Sponsors { get; set; }
    public Int32 FutureMeetings { get; set; }
    public Int32 PastMeetings { get; set; }
  }
}