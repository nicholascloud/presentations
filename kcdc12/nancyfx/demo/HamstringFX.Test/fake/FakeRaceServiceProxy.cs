using System.Collections.Generic;
using HamstringFX.data;
using HamstringFX.model;

namespace HamstringFX.Test.fake {
  public class FakeRaceServiceProxy : IRaceServiceProxy {
    public ICollection<Race> UpcomingRaces() {
      return new List<Race>();
    }
  }
}