using System.Web.Mvc;

namespace GrokMob.ActionFilters {
  public class UserActionFilterAttribute : ActionFilterAttribute {
    public override void OnActionExecuting(ActionExecutingContext filterContext) {
      filterContext.Controller.ViewBag.CurrentUser = "ncloud";
    }
  }
}