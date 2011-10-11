using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CoffeeShop.Domain;
using CoffeeShop.Domain.Entity;
using CoffeeShop.MVC.Models;
using NHibernate;
using NHibernate.Criterion;
using NHibernate.Transform;

namespace CoffeeShop.MVC.Controllers {
    
    [HandleError]
    public class HomeController : Controller {

        public ActionResult Index() {
            
            var model = new HomeModel();
            var session = DataStore.Current.GetCurrentSession();

            using (var trx = session.BeginTransaction()) {
                try {
                    model.Drinks = session.CreateCriteria<Drink>()
                        .SetFetchMode("OptionalIngredients", FetchMode.Join)
                        .SetResultTransformer(new DistinctRootEntityResultTransformer())
                        .AddOrder(Order.Asc("Name"))
                        .List<Drink>();

                    model.Blends = session.CreateCriteria<Blend>()
                        .AddOrder(Order.Asc("Name"))
                        .List<Blend>()
                        .Select(b => new SelectListItem { Text = b.Name, Value = b.Id.ToString() });

                    model.Sizes = session.CreateCriteria<CupSize>()
                        .AddOrder(Order.Asc("FluidOunces"))
                        .List<CupSize>()
                        .Select(s => new SelectListItem { Text = s.Name, Value = s.Id.ToString() });

                    model.Ingredients = session.CreateCriteria<Ingredient>()
                        .AddOrder(Order.Asc("Name"))
                        .List<Ingredient>()
                        .Select(i => new SelectListItem { Text = i.Name, Value = i.Id.ToString() });

                    trx.Commit();
                } catch (Exception) {
                    trx.Rollback();
                    throw;
                }
            }
            return View(model);
        }

        [ActionName("Add")]
        public ActionResult AddDrink(HomeModel model) {
            
            var session = DataStore.Current.GetCurrentSession();

            using (var trx = session.BeginTransaction()) {
                try {

                    var drink = new Drink {
                        BasePrice = model.ProductBasePrice,
                        Name = model.ProductName
                    };

                    drink.Blend = session.CreateCriteria<Blend>()
                        .Add(Restrictions.Eq("Id", model.BlendID))
                        .UniqueResult<Blend>();

                    drink.Size = session.CreateCriteria<CupSize>()
                        .Add(Restrictions.Eq("Id", model.CupSizeID))
                        .UniqueResult<CupSize>();

                    if(model.IngredientIDs.Any()) {

                        drink.OptionalIngredients.AddAll(
                            session.CreateCriteria<Ingredient>()
                                .Add(Restrictions.In("Id", model.IngredientIDs))
                                .List<Ingredient>()
                            );
                    }

                    session.Save(drink);

                    TempData["success"] = "Drink successfully added!";

                } catch (Exception ex) {
                    trx.Rollback();
                    TempData["error"] = "Bad things happened! " + ex.Message;
                    throw;
                }
            }

            return new RedirectResult(Url.Action("Index"));
        }
    }
}
