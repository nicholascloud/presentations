using HamstringFX.RaceService.data;
using Nancy;

namespace HamstringFX.RaceService.modules {
  public class RaceModule : NancyModule {
    
    public RaceModule (IRaceData raceDataStream) {

      Get["/races"] = routeParameters => {
        var races = raceDataStream.UpcomingRaces();
        return Response.AsJson(races);
      };
    }
  }
}