using System.Web.Mvc;

namespace GrokMob.ActionFilters {
  public class UserViewDataAttribute : ActionFilterAttribute {
    public override void OnActionExecuting(ActionExecutingContext filterContext) {
      filterContext.Controller.ViewBag.CurrentUser = "ncloud";
    }
  }
}