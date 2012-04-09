using System.Collections.Generic;
using HamstringFX.data;

namespace HamstringFX.model {
  public interface IRaceServiceProxy {
    ICollection<Race> UpcomingRaces();
  }
}