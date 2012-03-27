using System;

namespace HamstringFX.data {

  public class Run {
    public Guid Id { get; set; }
    public DateTime ScheduledAt { get; set; }
    public Int32 Hours { get; set; }
    public Int32 Minutes { get; set; }
    public Int32 Seconds { get; set; }

    public Route Route { get; set; }
  }
}