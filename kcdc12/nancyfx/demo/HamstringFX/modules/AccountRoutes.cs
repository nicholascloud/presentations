using System.Linq;
using HamstringFX.data;
using Nancy;
using Nancy.Security;

namespace HamstringFX.modules {
  public class AccountRoutes : NancyModule {

    public AccountRoutes(IHamstringData db) {

      this.RequiresAuthentication();

      Get["/myhamstring"] = parameters => {
        var member = Context.CurrentUser.ToMember(db);
        dynamic model = Fake.HamstringModel(db, member);
        return View["myhamstring.sshtml", model];
      };
    }
  }
}