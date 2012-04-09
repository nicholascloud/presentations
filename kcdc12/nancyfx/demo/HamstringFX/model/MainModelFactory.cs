using System.Linq;
using HamstringFX.data;

namespace HamstringFX.model {
  public class MainModelFactory : IModelFactory {
    public MainModelFactory(IHamstringData db, IRaceServiceProxy proxy) {
      _db = db;
      _proxy = proxy;
    }

    private readonly IHamstringData _db;
    private readonly IRaceServiceProxy _proxy;

    public dynamic Create() {
      return new {
        UpcomingRaces = _proxy.UpcomingRaces(),
        Announcements = _db.Announcements.OrderByDescending(n => n.ReportedAt).ToList()
      };
    }
  }
}