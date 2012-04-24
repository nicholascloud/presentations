using System;
using System.Linq;
using HamstringFX.data;

namespace HamstringFX.model {
  internal class RunModelFactory : IModelFactory {
    public RunModelFactory(IHamstringData db, Member member, Guid runId) {
      _db = db;
      _member = member;
      _runId = runId;
    }

    private readonly IHamstringData _db;
    private readonly Member _member;
    private readonly Guid _runId;

    public dynamic Create() {
      var allRuns = _db.Runs
        .Where(r => r.MemberId == _member.Id)
        .OrderByDescending(r => r.ScheduledAt)
        .ToList();

      var run = allRuns.Single(r => r.Id == _runId);

      return new {
        id = run.Id,
        duration = run.Duration,
        scheduledAt = run.ScheduledAt.ToString("dddd, MM/dd/yyyy"),
        routeName = run.Route.Name,
        distance = run.Route.Distance,
        pace = run.Pace,
        bestTime = allRuns
          .Where(o => o.RouteId == run.RouteId)
          .Min()
          .Duration
      };
    }
  }
}