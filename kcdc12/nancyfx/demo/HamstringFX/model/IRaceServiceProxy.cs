using System.Collections.Generic;

namespace HamstringFX.model {
  public interface IRaceServiceProxy {
    ICollection<Race> UpcomingRaces();
  }
}