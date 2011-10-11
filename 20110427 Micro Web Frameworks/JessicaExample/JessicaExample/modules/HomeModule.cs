using System;
using System.Collections.Generic;
using System.Linq;
using Jessica;
using PrizePick;

namespace JessicaExample.modules {
    internal class HomeModule : JessModule {
        public HomeModule() {

            Get("/", p => {
                using (var prizeQuery = new PrizeQuery()) {
                    var prizes = prizeQuery.Fetch()
                        .Select(z => new {id = z.PrizeID, name = z.Name})
                        .ToArray();
                    return View("home", prizes);
                }
            });

            Post("/pick", p => {
                string[] names = Convert.ToString(p.contenders).Split(',');
                var raffle = new Raffle(names);
                var result = raffle.Pick();
                
                return Response.AsJson(new {
                    remaining = String.Join("\r\n", result.RemainingContestants),
                    winner = result.Winner
                });
            });

            Post("/expire", p => {
                using(var prizeQuery = new PrizeQuery()) {
                    prizeQuery.Award(Convert.ToInt32(p.id));
                }
                return Response.AsJson(new {});
            });
        }
    }
}