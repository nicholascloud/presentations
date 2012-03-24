using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Nancy;

namespace HamstringFX.Core.modules {
  public class Running : NancyModule {
    private readonly dynamic _db;

    public Running(IDataStore db) {
      _db = db.Open();

      Get["/run"] = p => {
        return HttpStatusCode.NotFound;
      };

      Post["/run"] = p => {
        try {
          Guid newId = Guid.NewGuid();
          _db.Runs.Insert(
            Id: newId, 
            ScheduledAt: p.when, 
            Location: p.where, 
            Hours: p.hour, 
            Minutes: p.min,
            Seconds: p.sec);

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
