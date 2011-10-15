using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace GrokMob {
  public class MvcApplication : HttpApplication {
    public static void RegisterGlobalFilters(GlobalFilterCollection filters) {
      filters.Add(new HandleErrorAttribute());
    }

    public static void RegisterRoutes(RouteCollection routes) {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

      routes.MapRoute(
        "Meeting",
        "meeting/{id}",
        new { controller = "home", action = "meeting", id = (string) null }
        );

      routes.MapRoute(
        "Level1",
        "{controller}/{action}/{id}",
        new { controller = "home", action = "dashboard", id = UrlParameter.Optional }
        );
    }

    protected void Application_Start() {
      AreaRegistration.RegisterAllAreas();
      RegisterGlobalFilters(GlobalFilters.Filters);
      RegisterRoutes(RouteTable.Routes);
    }
  }
}