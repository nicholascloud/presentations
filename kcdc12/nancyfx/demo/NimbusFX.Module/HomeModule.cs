using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Nancy;

namespace NimbusFX.Module {
  public class HomeModule : NancyModule {

    public HomeModule () {

      Get["/foo"] = parameters => {
        return View["foo.html"];
      };
    }
  }
}
