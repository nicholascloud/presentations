using System;

namespace CoffeeShop.Domain.Entity {

    public class CupSize {

        public virtual Guid Id { get; set; }

        public virtual string Name { get; set; }

        public virtual int FluidOunces { get; set; }

        public virtual decimal Upcharge { get; set; }

        public CupSize() {
            Name = String.Empty;
            FluidOunces = 0;
            Upcharge = 0M;
        }

        public override string ToString() {
            return Name;
        }
    }
}