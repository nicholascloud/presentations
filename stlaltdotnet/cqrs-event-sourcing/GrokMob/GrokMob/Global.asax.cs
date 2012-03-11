using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using GrokMob.App_Start;
using GrokMob.Mvc;
using Ninject;
using log4net;
using log4net.Config;

namespace GrokMob {
  public class MvcApplication : HttpApplication {
    private static readonly ILog _log = LogManager.GetLogger(typeof (MvcApplication));

    public static void RegisterGlobalFilters(GlobalFilterCollection filters) {
      filters.Add(new HandleErrorAttribute());
      filters.Add(NinjectMVC3.CurrentKernel.Get<UserActionFilterAttribute>());
      filters.Add(NinjectMVC3.CurrentKernel.Get<StatsActionFilterAttribute>());
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

    public static void ConfigureLog4Net() {
      XmlConfigurator.Configure();
      if (_log.IsDebugEnabled) {
        _log.Debug("log4net configured");
      }
    }

    protected void Application_Start() {
      ConfigureLog4Net();
      AreaRegistration.RegisterAllAreas();
      RegisterGlobalFilters(GlobalFilters.Filters);
      RegisterRoutes(RouteTable.Routes);
      NCQRSBootStrapper.BootUp(NinjectMVC3.CurrentKernel);
    }
  }
}