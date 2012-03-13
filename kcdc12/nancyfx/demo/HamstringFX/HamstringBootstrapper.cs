using Nancy;
using Nancy.Conventions;

namespace HamstringFX {
  public class HamstringBootstrapper : DefaultNancyBootstrapper {
    protected override void ConfigureConventions (NancyConventions conventions) {
      base.ConfigureConventions (conventions);

      conventions.StaticContentsConventions.Add (
        StaticContentConventionBuilder.AddDirectory ("scripts", @"content\scripts"));
      conventions.StaticContentsConventions.Add (
        StaticContentConventionBuilder.AddDirectory ("styles", @"content\styles"));
      conventions.StaticContentsConventions.Add (
        StaticContentConventionBuilder.AddDirectory ("img", @"content\img"));
    }
  }
}