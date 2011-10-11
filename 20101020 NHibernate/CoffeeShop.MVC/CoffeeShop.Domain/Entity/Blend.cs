using System;
using Iesi.Collections.Generic;

namespace CoffeeShop.Domain.Entity {

    public class Blend {

        public virtual Guid Id { get; set; }

        public virtual string Name { get; set; }

        //one-to-many
        public virtual ISet<Drink> Drinks { get; set; }

        public virtual int Acidity { get; set; }

        public virtual Strength Strength { get; set; }

        public virtual decimal Upcharge { get; set; }

        public Blend() {
            Name = String.Empty;
            Drinks = new HashedSet<Drink>();
            Acidity = 0;
            Strength = new Strength();
            Upcharge = 0M;
        }

        public override string ToString() {
            return Name;
        }
    }
}