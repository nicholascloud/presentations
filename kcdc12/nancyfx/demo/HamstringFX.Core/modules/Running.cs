using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Nancy;

namespace HamstringFX.Core.modules {
  public class Running : NancyModule {

    public Running() {

      Post["/run"] = parameters => {
        try {

          return HttpStatusCode.OK;
        } catch (Exception ex) {

          return HttpStatusCode.InternalServerError;
        }
      };
    }
  }
}
