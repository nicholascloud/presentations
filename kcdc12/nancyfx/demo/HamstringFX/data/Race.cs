using System;

namespace HamstringFX.data {
  public class Race {
    public String Name { get; set; }
    public String Location { get; set; }
    public DateTime ScheduledAt { get; set; }
    public String URL { get; set; }

    public String FormattedDate {
      get { return ScheduledAt.ToString("MM/dd/yyyy"); }
    }
  }
}