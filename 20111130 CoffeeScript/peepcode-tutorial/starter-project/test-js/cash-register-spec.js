
  describe('Dish', function() {
    beforeEach(function() {
      return this.dish = new Dish('Sirloin steak $18.99 main course');
    });
    it('extracts title', function() {
      return (expect(this.dish.title)).toEqual('Sirloin steak');
    });
    return it('extracts price', function() {
      return (expect(this.dish.price.cents)).toEqual(1899);
    });
  });

  describe('Money', function() {
    describe('valid value', function() {
      beforeEach(function() {
        return this.money = new Money('$15.99');
      });
      it('parses to cents', function() {
        return (expect(this.money.cents)).toEqual(1599);
      });
      return it('formats to string', function() {
        return (expect(this.money.toString())).toEqual('$15.99');
      });
    });
    describe('valid value with less than 10 cents', function() {
      beforeEach(function() {
        return this.money = new Money('$15.05');
      });
      return it('formats string correctly', function() {
        return (expect(this.money.toString())).toEqual('$15.05');
      });
    });
    return describe('invalid value', function() {
      return it('sets cents to 0 if a valid value can\'t be parsed', function() {
        var money;
        money = new Money('NOT A MONETARY VALUE');
        return (expect(money.cents)).toEqual(0);
      });
    });
  });

  describe('Meal', function() {
    beforeEach(function() {
      this.donut = new Dish('Maple Bacon Donut $1.99');
      return this.fish = new Dish('Salmon Fillet $14.99');
    });
    return describe('blank object', function() {
      beforeEach(function() {
        return this.meal = new Meal;
      });
      it('adds a single dish', function() {
        this.meal.add(this.donut);
        return (expect(this.meal.dishes.length)).toEqual(1);
      });
      it('adds several dieshes', function() {
        this.meal.add(this.donut, this.fish);
        return (expect(this.meal.dishes.length)).toEqual(2);
      });
      return it('calculates the total price', function() {
        this.meal.add(this.donut, this.fish);
        return (expect(this.meal.totalPrice().cents)).toEqual(1698);
      });
    });
  });
