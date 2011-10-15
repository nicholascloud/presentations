using System;

namespace GrokMob.Domain {
  public class Stat {
    public virtual Guid Id { get; set; }
    public virtual String Moniker { get; set; }
    public virtual String Label { get; set; }
    public virtual Int32 Value { get; set; }
  }
}