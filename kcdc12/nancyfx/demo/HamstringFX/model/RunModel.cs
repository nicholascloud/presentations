using System;

namespace HamstringFX.model {
  public class RunModel {
    public DateTime When { get; set; }
    public Guid Where { get; set; }
    public Int32 Hour { get; set; }
    public Int32 Min { get; set; }
    public Int32 Sec { get; set; }

    public String Time {
      get { return String.Format("{0}:{1}:{2}", Hour, Min, Sec); }
    }
  }
}