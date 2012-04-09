using System;
using System.ComponentModel.DataAnnotations;

namespace HamstringFX.data {
  public class Announcement {
    [Key]
    public Guid Id { get; set; }
    public DateTime ReportedAt { get; set; }
    public String Content { get; set; }

    public String FormattedDate {
      get { return ReportedAt.ToString("dddd, MM/dd/yyyy"); }
    }
  }
}