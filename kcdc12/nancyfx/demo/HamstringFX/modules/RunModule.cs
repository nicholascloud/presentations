using System;
using System.Linq;
using HamstringFX.data;
using HamstringFX.model;
using Nancy;
using Nancy.ModelBinding;
using Nancy.Security;

namespace HamstringFX.modules {
  public class RunModule : NancyModule {

    public RunModule(IHamstringData db) {

      //TODO: talk about extensions in Nancy.Security
      this.RequiresAuthentication();

      Get["/run"] = p => {
        return HttpStatusCode.NotFound;
      };

      Post["/run"] = p => {
        try {
          Guid newId = Guid.NewGuid();
          var runModel = this.Bind<RunModel>();
          

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
