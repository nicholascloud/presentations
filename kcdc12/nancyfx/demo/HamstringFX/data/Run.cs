using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {

  public class Run : IComparable<Run> {
    [Key]
    public Guid Id { get; set; }
    public Guid MemberId { get; set; }
    public Guid RouteId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public String Duration { get; set; }

    [ForeignKey("RouteId")]
    public virtual Route Route { get; set; }

    [ForeignKey("MemberId")]
    public virtual Member Member { get; set; }

    public Decimal Pace {
      get {
        return Math.Round((Decimal) DurationTime.TotalMinutes / Route.Distance, 2);
      }
    }

    private TimeSpan DurationTime {
      get {
        String[] parts = Duration.Split(':');
        return new TimeSpan(
          Int32.Parse(parts[0]),
          Int32.Parse(parts[1]),
          Int32.Parse(parts[2]));
      }
    } 

    public int CompareTo(Run other) {
      if (DurationTime == other.DurationTime) return 0;
      if (DurationTime > other.DurationTime) return 1;
      return -1;
    }
  }
}