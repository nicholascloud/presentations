using System;
using System.Linq;
using HamstringFX.data;
using HamstringFX.model;
using Nancy;
using Nancy.ModelBinding;
using Nancy.Security;

namespace HamstringFX.modules {
  public class RunModule : NancyModule {

    public RunModule(IHamstringData db, Models models) {

      this.RequiresAuthentication();

      Post["/run"] = p => {
        var member = Context.CurrentUser.ToMember(db);

        try {
          var runModel = this.Bind<RunModel>();
          var run = new Run {
            Id = Guid.NewGuid(),
            Duration = runModel.Time,
            MemberId = member.Id,
            RouteId = runModel.Where,
            ScheduledAt = runModel.When
          };
          db.Runs.Add(run);
          db.SaveChanges();

          return Response.AsJson(new { id = run.Id });

        } catch (Exception ex) {

          return Response.AsJson(
            new { error = ex.Message }, 
            HttpStatusCode.InternalServerError);
        }
      };

      Get["/run/{id}"] = p => {
        var member = Context.CurrentUser.ToMember(db);
        Guid? id = p.id;
        if (id == null) return HttpStatusCode.NotFound;
        var run = db.Runs
          .SingleOrDefault(r => r.Id == id && r.MemberId == member.Id);
        if (run == null) return HttpStatusCode.NotFound;

        dynamic model = models.RunModel(member, id.Value).Create();
        return Response.AsJson((Object)model);
      };
    }
  }
}
