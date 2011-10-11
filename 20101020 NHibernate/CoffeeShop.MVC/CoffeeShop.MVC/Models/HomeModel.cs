using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CoffeeShop.Domain.Entity;

namespace CoffeeShop.MVC.Models {
    
    public class HomeModel {

        // reference collections

        public IEnumerable<Drink> Drinks { get; set; }

        public IEnumerable<SelectListItem> Blends { get; set; }

        public IEnumerable<SelectListItem> Sizes { get; set; }

        public IEnumerable<SelectListItem> Ingredients { get; set; }

        // form

        [DisplayName("Name")]
        public string ProductName { get; set; }

        [DisplayName("Base Price")]
        public decimal ProductBasePrice { get; set; }

        [DisplayName("Cup Size")]
        public Guid CupSizeID { get; set; }

        [DisplayName("Blend")]
        public Guid BlendID { get; set; }

        [DisplayName("Ingredients")]
        public Guid[] IngredientIDs { get; set; }
    }
}