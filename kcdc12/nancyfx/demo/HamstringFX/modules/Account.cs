using HamstringFX.data;
using Nancy;
using Nancy.Security;

namespace HamstringFX.modules {
  public class Account : NancyModule {

    public Account(IHamstringData db) {

      this.RequiresAuthentication();

      Get["/myhamstring"] = parameters => {
        dynamic model = Fake.HamstringModel(db);
        return View["myhamstring.sshtml", model];
      };
    }
  }
}