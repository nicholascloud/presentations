using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GrokMob.Models;
using PetaPoco;

namespace GrokMob.Controllers {
  public class MembersController : GrokMobController {
    public MembersController(Database database) : base(database) {
    }

    public ActionResult Index() {

      var members = DB.Fetch<Member>("select * from Member");
      var collection = new MembersCollection(members);
      return View(collection);
    }
  }
}