using System;
using HamstringFX.RaceService.data;
using Nancy;

namespace HamstringFX.RaceService.modules {
  public class RaceModule : NancyModule {
    
    public RaceModule (IRaceData raceDataStream, IOutput output) {

      Before += ctx => {
        output.WriteLine(
          String.Format("{0} : {1}", DateTime.Now, ctx.Request.Url.ToString()));
        return ctx.Response;
      };

      Get["/races"] = routeParameters => {
        var races = raceDataStream.UpcomingRaces();
        return Response.AsJson(races);
      };

      After += ctx => {
      };
    }
  }
}