using Nancy;
using PetaPoco;

namespace HamstringFX.Core.modules {
  public class Hamstring : NancyModule {
    private readonly Database _db;

    public Hamstring(Database db) {


      Get["/"] = parameters => {
        dynamic model = Fake.HamstringModel(_db);
        return View["hamstring.sshtml", model];
      };
    }
  }
}