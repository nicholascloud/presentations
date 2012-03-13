using Nancy;

namespace HamstringFX.Core.modules {
  public class Hamstring : NancyModule {

    public Hamstring() {

      Get["/"] = parameters => {
        return View["hamstring.sshtml", Fake.HamstringModel ()];
      };
    }
  }
}