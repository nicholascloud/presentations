using System.Collections.Generic;
using HamstringFX.RaceService.domain;

namespace HamstringFX.RaceService.data {
  public interface IRaceData {
    ICollection<Race> UpcomingRaces();
  }
}