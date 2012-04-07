using HamstringFX.data;
using HamstringFX.model;
using HamstringFX.security;
using Nancy;
using Nancy.Authentication.Forms;
using Nancy.Conventions;
using Nancy.Hosting.Aspnet;
using Forms=Nancy.Authentication.Forms;
using TinyIoC;
using Nancy.Bootstrapper;

namespace HamstringFX {
  public class HamstringBootstrapper : DefaultNancyBootstrapper {

    protected override void ConfigureConventions (NancyConventions conventions) {
      base.ConfigureConventions (conventions);

      //TODO: explain configuration conventions in slideshow

      conventions.StaticContentsConventions.Add (
        StaticContentConventionBuilder.AddDirectory ("scripts", @"public\scripts"));
      conventions.StaticContentsConventions.Add (
        StaticContentConventionBuilder.AddDirectory("styles", @"public\styles"));
      conventions.StaticContentsConventions.Add (
        StaticContentConventionBuilder.AddDirectory("img", @"public\img"));
    }

    protected override void ConfigureRequestContainer(TinyIoCContainer container, NancyContext context) {
      base.ConfigureRequestContainer(container, context);

      //TODO: explain container configuration in slideshow

      string serviceEndpoint = "http://localhost:8087";

      container.Register<IHamstringData, HamstringData>().AsPerRequestSingleton();
      container.Register<IRaceServiceProxy>(new RaceServiceProxy(serviceEndpoint));
      container.Register<IHashStrategy, MD5Strategy>();
      container.Register<IUserMapper, MemberAuthentication>().AsPerRequestSingleton();
      container.Register<IMemberAuthentication, MemberAuthentication>().AsPerRequestSingleton();
      container.Register<Models, Models>().AsSingleton();
    }

    protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context) {
      base.RequestStartup(container, pipelines, context);

      //TODO: explain forms auth in slideshow

      var configuration = new Forms.FormsAuthenticationConfiguration {
        RedirectUrl = "~/login",
        UserMapper = container.Resolve<IUserMapper>(),
      };

      Forms.FormsAuthentication.Enable(pipelines, configuration);
    }
  }
}