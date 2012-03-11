using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using GrokMob.ActionFilters;
using GrokMob.Controllers;

namespace GrokMob {
  public class MvcApplication : HttpApplication {
    public static void RegisterGlobalFilters(GlobalFilterCollection filters) {
      filters.Add(new HandleErrorAttribute());
    }

    public static void RegisterRoutes(RouteCollection routes) {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
      routes.IgnoreRoute("{resource}.ico/{*pathInfo}");

      routes.MapRoute(
        "index",
        "{controller}",
        new { action = "index" }
        );

      routes.MapRoute(
        "default",
        "{controller}/{action}/{id}",
        new { controller = "dashboard", action = "index", id = UrlParameter.Optional },
        new { id = @"\d?" }
        );
    }

    protected void Application_Start() {
      AreaRegistration.RegisterAllAreas();
      RegisterGlobalFilters(GlobalFilters.Filters);
      RegisterRoutes(RouteTable.Routes);
    }
  }
}