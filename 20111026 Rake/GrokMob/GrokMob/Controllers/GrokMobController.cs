using System.Web.Mvc;
using PetaPoco;

namespace GrokMob.Controllers {
  public abstract class GrokMobController : Controller {
    protected GrokMobController(Database database) {
      _database = database;
    }

    private readonly Database _database;

    protected Database DB {
      get { return _database; }
    }
  }
}