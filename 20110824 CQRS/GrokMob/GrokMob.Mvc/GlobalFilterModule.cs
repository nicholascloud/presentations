using Ninject.Modules;

namespace GrokMob.Mvc {
  public class GlobalFilterModule : NinjectModule {
    public override void Load() {

      Bind<UserActionFilterAttribute>()
        .To<UserActionFilterAttribute>();
      Bind<StatsActionFilterAttribute>()
        .To<StatsActionFilterAttribute>();
    }
  }
}