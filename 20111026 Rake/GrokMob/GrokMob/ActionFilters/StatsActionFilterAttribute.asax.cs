using System.Collections.Generic;
using System.Web.Mvc;

namespace GrokMob.ActionFilters {
  public class StatsActionFilterAttribute : ActionFilterAttribute {

    public StatsActionFilterAttribute(/*ISessionFactory sessionFactory*/) {
    }

    public override void OnActionExecuting(ActionExecutingContext filterContext) {

//      using (var session = _sessionFactory.OpenSession()) {
//        using (var trx = session.BeginTransaction()) {
//          try {
//            var stats = session.QueryOver<Stat>()
//              .OrderBy(s => s.Moniker)
//              .Asc
//              .List();
//            trx.Commit();
//            filterContext.Controller.ViewData["Stats"] = stats;
//
//          } catch {
//
//            trx.Rollback();
//            filterContext.Controller.ViewData["Stats"] = new List<Stat>();
//          }
//        }
//      }
    }
  }
}