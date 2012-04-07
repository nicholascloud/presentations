using HamstringFX.RaceService.data;
using Nancy;

namespace HamstringFX.RaceService {
  public class RaceServiceBootstrapper : DefaultNancyBootstrapper {

    protected override void ConfigureApplicationContainer(TinyIoC.TinyIoCContainer container) {
      base.ConfigureApplicationContainer(container);

      container.Register<IRaceData, RaceData>().AsSingleton();
    }
  }
}