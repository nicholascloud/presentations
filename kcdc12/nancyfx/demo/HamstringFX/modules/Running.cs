using System;
using Nancy;
using Nancy.Security;

namespace HamstringFX.modules {
  public class Running : NancyModule {

    public Running() {

      //TODO: talk about extensions in Nancy.Security
      this.RequiresAuthentication();

      var user = Context.CurrentUser;

      Get["/run"] = p => {
        return HttpStatusCode.NotFound;
      };

      Post["/run"] = p => {
        try {
          Guid newId = Guid.NewGuid();
      

          return HttpStatusCode.OK;
        } catch (Exception ex) {

          return HttpStatusCode.InternalServerError;
        }
      };

      Get["/runs"] = p => {
        return HttpStatusCode.NotFound;
      };
    }
  }
}
