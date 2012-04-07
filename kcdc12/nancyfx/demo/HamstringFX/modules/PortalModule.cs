using System.Linq;
using HamstringFX.data;
using HamstringFX.model;
using Nancy;
using Nancy.Security;

namespace HamstringFX.modules {
  public class PortalModule : NancyModule {

    public PortalModule(IHamstringData db, Models models) {

      this.RequiresAuthentication();

      Get["/myhamstring"] = parameters => {
        var member = Context.CurrentUser.ToMember(db);
        dynamic model = models.PortalModel(member).Create();
        return View["myhamstring.sshtml", model];
      };
    }
  }
}