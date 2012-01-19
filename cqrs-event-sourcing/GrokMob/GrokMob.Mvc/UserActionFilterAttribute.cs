using System.Web.Mvc;

namespace GrokMob.Mvc {
  public class UserActionFilterAttribute : ActionFilterAttribute {
    public override void OnActionExecuting(ActionExecutingContext filterContext) {
      filterContext.Controller.ViewBag.CurrentUser = "ncloud";
    }
  }
}