using System;

namespace GrokMob.ReadModel {
  public class Venue {
    public virtual Guid Id { get; set; }
    public virtual String Name { get; set; }
    public virtual String Address { get; set; }
  }
}