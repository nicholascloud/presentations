using System.Linq;

namespace HamstringFX.model {
  public class MainModelFactory : IModelFactory {
    public MainModelFactory(IRaceServiceProxy proxy) {
      _proxy = proxy;
    }

    private readonly IRaceServiceProxy _proxy;

    public dynamic Create() {
      return new {
        UpcomingRaces = _proxy.UpcomingRaces()
      };
    }
  }
}