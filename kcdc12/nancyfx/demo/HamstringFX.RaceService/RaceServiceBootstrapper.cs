using HamstringFX.RaceService.data;
using Nancy;

namespace HamstringFX.RaceService {
  public class RaceServiceBootstrapper : DefaultNancyBootstrapper {
    public RaceServiceBootstrapper(CliArgs args) {
      _args = args;
    }

    private readonly CliArgs _args;

    protected override void ConfigureApplicationContainer(TinyIoC.TinyIoCContainer container) {
      base.ConfigureApplicationContainer(container);

      container.Register<IRaceData>(new RaceData(_args.AlwaysUseCache));
      container.Register<IOutput, CliOutput>();
    }
  }
}