using System;
using Nancy;

namespace HamstringFX.modules {
  public class Running : NancyModule {

    public Running() {

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
