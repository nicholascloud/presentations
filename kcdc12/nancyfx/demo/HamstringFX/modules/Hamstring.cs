using HamstringFX.data;
using Nancy;

namespace HamstringFX.modules {
  public class Hamstring : NancyModule {

    public Hamstring(IHamstringData db) {


      Get["/"] = parameters => {
        dynamic model = Fake.HamstringModel(db);
        return View["hamstring.sshtml", model];
      };
    }
  }
}