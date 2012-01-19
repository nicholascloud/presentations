using NHibernate;
using Ninject.Modules;

namespace GrokMob.ReadModel.Denormalizers {
  public class DenormalizerModule : NinjectModule {

    public override void Load() {
      Bind<MeetingDenormalizer>()
        .To<MeetingDenormalizer>();
      Bind<StatDenormalizer>()
        .To<StatDenormalizer>();
    }
  }
}