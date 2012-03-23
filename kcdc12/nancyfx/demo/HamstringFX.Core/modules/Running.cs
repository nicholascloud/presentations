using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Nancy;

namespace HamstringFX.Core.modules {
  public class Running : NancyModule {
    private readonly IDataStore _db;

    public Running(IDataStore db) {
      _db = db;

      Get["/run"] = parameters => {
        return HttpStatusCode.NotFound;
      };

      Post["/run"] = parameters => {
        try {

          return HttpStatusCode.OK;
        } catch (Exception ex) {

          return HttpStatusCode.InternalServerError;
        }
      };

      Get["/runs"] = parameters => {
        return HttpStatusCode.NotFound;
      };
    }
  }
}
