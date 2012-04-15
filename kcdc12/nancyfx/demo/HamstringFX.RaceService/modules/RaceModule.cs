using System;
using System.Linq;
using HamstringFX.RaceService.data;
using Nancy;

namespace HamstringFX.RaceService.modules {
  public class RaceModule : NancyModule {

    const String SERVICE_TOKEN = "E6319915-809C-4A20-81C8-02A63CD9344B";

    public RaceModule (IRaceData raceDataStream, IOutput output) {

      Before += ctx => {
        String message = String.Format("{0} : [Host: {1}] {2}",
          DateTime.Now,
          ctx.Request.UserHostAddress,
          ctx.Request.Url.ToString());
        output.WriteLine(message);

        String token = ctx.Request.Headers["X-Hamstring-Token"].SingleOrDefault();

        if (token == null || token.Trim() != SERVICE_TOKEN) {
          output.WriteLine("=== ACCESS DENIED ===");
          return HttpStatusCode.Forbidden;
        }

        return ctx.Response;
      };

      Get["/races"] = routeParameters => {
        var races = raceDataStream.UpcomingRaces();
        return Response.AsJson(races);
      };

      After += ctx => {
        //http://en.wikipedia.org/wiki/List_of_HTTP_header_fields
        ctx.Response.Headers.Add("X-Powered-By", "HamstringFX.RaceService");
        ctx.Response.Headers.Add("X-Version", "1.0");
      };
    }
  }
}