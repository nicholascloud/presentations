using HamstringFX.data;
using Nancy;
using Nancy.Security;

namespace HamstringFX.modules {
  public class Account : NancyModule {

    public Account(IHamstringData db) {

      this.RequiresAuthentication();

      var user = Context.CurrentUser;

      Get["/myhamstring"] = parameters => {
        
        dynamic model = Fake.HamstringModel(db, user.UserName);
        return View["myhamstring.sshtml", model];
      };
    }
  }
}