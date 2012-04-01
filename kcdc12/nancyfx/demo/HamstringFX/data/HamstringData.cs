using System.Data.Entity;

namespace HamstringFX.data {
  public interface IHamstringData {
    IDbSet<Route> Routes { get; set; }
    IDbSet<Run> Runs { get; set; }
    IDbSet<Member> Members { get; set; } 
  }

  public class HamstringData : DbContext, IHamstringData {
    public IDbSet<Route> Routes { get; set; }
    public IDbSet<Run> Runs { get; set; }
    public IDbSet<Member> Members { get; set; } 
  }
}