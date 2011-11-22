(function() {
  describe("Dish", function() {
    describe("constructor", function() {
      beforeEach(function() {
        return this.dish = new Dish('Sirloin Steak $18.99 mains');
      });
      it("extracts title", function() {
        return (expect(this.dish.title)).toEqual('Sirloin Steak');
      });
      it("extracts price", function() {
        (expect(this.dish.price.cents)).toEqual(1899);
        return (expect(this.dish.price.toString())).toEqual('$18.99');
      });
      return it("extracts tag", function() {
        return (expect(this.dish.tag)).toEqual('mains');
      });
    });
    describe("constructor with partial data", function() {
      beforeEach(function() {
        return this.dish = new Dish('Sirloin Steak $18.99');
      });
      it("extracts title", function() {
        return (expect(this.dish.title)).toEqual('Sirloin Steak');
      });
      it("extracts price", function() {
        return (expect(this.dish.price.toString())).toEqual('$18.99');
      });
      return it("leaves tag blank", function() {
        return (expect(this.dish.tag)).toEqual('');
      });
    });
    describe("constructor with invalid data", function() {
      beforeEach(function() {
        return this.dish = new Dish('Sirloin Steak');
      });
      it("extracts title", function() {
        return (expect(this.dish.title)).toEqual('Sirloin Steak');
      });
      it("leaves price blank", function() {
        return (expect(this.dish.price.cents)).toEqual(0);
      });
      return it("leaves tag blank", function() {
        return (expect(this.dish.tag)).toEqual('');
      });
    });
    return describe("constructor with null description", function() {
      beforeEach(function() {
        return this.dish = new Dish;
      });
      return it("sets title to null", function() {
        return (expect(this.dish.title)).toEqual('');
      });
    });
  });
  describe("Money", function() {
    return describe("constructor", function() {
      describe("valid value", function() {
        beforeEach(function() {
          return this.money = new Money('$15.99');
        });
        it("extracts dollar and cents", function() {
          return (expect(this.money.cents)).toEqual(1599);
        });
        return it("formats as string", function() {
          return (expect(this.money.toString())).toEqual('$15.99');
        });
      });
      return describe("invalid value", function() {
        it("clips fractional part of cents to .99", function() {
          this.money = new Money('$15.909');
          return (expect(this.money.cents)).toEqual(1599);
        });
        return it("uses zero if a money value can't be parsed", function() {
          this.money = new Money('NOT A MONETARY VALUE');
          return (expect(this.money.cents)).toEqual(0);
        });
      });
    });
  });
  describe("Meal", function() {
    beforeEach(function() {
      this.donut = new Dish('Maple Bacon Donut $1.99 #breakfast');
      this.fish = new Dish('Salmon Filet $14.99 #main');
      return this.dishes = [this.donut, this.fish];
    });
    return describe("starting blank", function() {
      beforeEach(function() {
        return this.meal = new Meal;
      });
      it("adds a single dish", function() {
        this.meal.add(this.donut);
        return (expect(this.meal.dishes.length)).toEqual(1);
      });
      it("calculates total price", function() {
        this.meal.add(this.donut, this.fish);
        return (expect(this.meal.totalPrice().cents)).toEqual(1698);
      });
      it("updates total price when a new dish is added", function() {
        (expect(this.meal.totalPrice().cents)).toEqual(0);
        this.meal.add(this.donut);
        (expect(this.meal.totalPrice().cents)).toEqual(199);
        this.meal.add(this.fish);
        return (expect(this.meal.totalPrice().cents)).toEqual(1698);
      });
      return it("adds a list of dishes", function() {
        this.meal.add(this.donut, this.fish);
        return (expect(this.meal.dishes.length)).toEqual(2);
      });
    });
  });
}).call(this);
