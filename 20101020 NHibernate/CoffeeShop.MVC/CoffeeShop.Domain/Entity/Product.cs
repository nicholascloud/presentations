using System;

namespace CoffeeShop.Domain.Entity {

    public abstract class Product {

        public virtual Guid Id { get; set; }

        public virtual string Name { get; set; }
        
        public virtual decimal BasePrice { get; set; }

        public Product() {
            Name = String.Empty;
            BasePrice = 0M;
        }

        public abstract decimal TotalPrice();
    }
}