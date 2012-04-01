using System.Web.Configuration;
using HamstringFX.data;
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

      container.Register<IHamstringData, HamstringData>().AsPerRequestSingleton();
      container.Register<IHashStrategy, MD5Strategy>();
      container.Register<IUserMapper, MemberAuthorization>().AsPerRequestSingleton();
      container.Register<IMemberAuthorization, MemberAuthorization>().AsPerRequestSingleton();
    }

    protected override void RequestStartup(TinyIoCContainer container, IPipelines pipelines, NancyContext context) {
      base.RequestStartup(container, pipelines, context);

      //TODO: explain forms auth in slideshow

      var formsAuth = new Forms.FormsAuthenticationConfiguration {
        RedirectUrl = "~/login",
        UserMapper = container.Resolve<IUserMapper>(),
      };

      Forms.FormsAuthentication.Enable(pipelines, formsAuth);
    }
  }
}