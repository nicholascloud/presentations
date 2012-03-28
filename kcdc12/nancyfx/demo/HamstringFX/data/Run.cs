using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {

  public class Run {
    [Key]
    public Guid Id { get; set; }
    public Guid RouteId { get; set; }
    public DateTime ScheduledAt { get; set; }
    public String Duration { get; set; }

    
    [ForeignKey("RouteId")]
    public virtual Route Route { get; set; }
  }
}