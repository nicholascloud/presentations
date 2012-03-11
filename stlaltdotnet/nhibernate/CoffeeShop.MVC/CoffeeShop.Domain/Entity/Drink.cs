using System.Linq;
using System.Text;
using Iesi.Collections.Generic;

namespace CoffeeShop.Domain.Entity {

    public class Drink : Product {
        
        public virtual CupSize Size { get; set; }

        //many-to-one
        public virtual Blend Blend { get; set; }

        //many-to-many
        public virtual ISet<Ingredient> OptionalIngredients { get; set; }

        public Drink() {
            Size = new CupSize();
            Blend = new Blend();
            OptionalIngredients = new HashedSet<Ingredient>();
        }

        public override decimal TotalPrice() {
            return BasePrice +
                Blend.Upcharge +
                Size.Upcharge +
                OptionalIngredients.Sum(i => i.Upcharge);
        }

        public virtual string IngredientSummary() {

            var b = new StringBuilder();
            OptionalIngredients.ForEach(i => b.Append(i.ToString()).Append(", "));
            return b.ToString();
        }
    }
}
