using System;

namespace CoffeeShop.Domain.Entity {

    public class Ingredient {

        public virtual Guid Id { get; set; }

        public virtual string Name { get; set; }

        public virtual decimal Upcharge { get; set; }

        public Ingredient() {
            Name = String.Empty;
            Upcharge = 0M;
        }

        public override string ToString() {
            return Name;
        }
    }
}