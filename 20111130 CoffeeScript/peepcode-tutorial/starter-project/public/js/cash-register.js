(function() {
  var Dish, Meal, Money,
    __slice = Array.prototype.slice;

  window.Dish = Dish = (function() {

    function Dish(rawDescription) {
      var all, _ref;
      if (rawDescription == null) rawDescription = '';
      _ref = this.parseRawDescription(rawDescription), all = _ref[0], this.title = _ref[1], this.price = _ref[2];
      this.price = new Money(this.price);
    }

    Dish.prototype.parseRawDescription = function(rawDescription) {
      var match, matches, pattern, _i, _len, _results;
      pattern = /([^$]+)(\$\d+\.\d+)/;
      matches = rawDescription.match(pattern);
      _results = [];
      for (_i = 0, _len = matches.length; _i < _len; _i++) {
        match = matches[_i];
        _results.push(match.trim());
      }
      return _results;
    };

    Dish.prototype.toJson = function() {
      return {
        title: this.title,
        price: this.price.toString()
      };
    };

    return Dish;

  })();

  /*
  Money represents dollarts and cents
  */

  window.Money = Money = (function() {

    function Money(rawMoney) {
      if (rawMoney == null) rawMoney = '';
      this.cents = this.parseCents(rawMoney);
    }

    Money.prototype.parseCents = function(rawMoney) {
      var cents, dollars, _ref, _ref2;
      _ref2 = (_ref = rawMoney.match(/(\d+)/g)) != null ? _ref : [0, 0], dollars = _ref2[0], cents = _ref2[1];
      return +cents + 100 * dollars;
    };

    Money.prototype.toString = function() {
      var centsPart, dollarPart, padding;
      dollarPart = Math.floor(this.cents / 100);
      centsPart = this.cents % 100;
      padding = centsPart < 10 ? '0' : '';
      return "$" + dollarPart + "." + padding + centsPart;
    };

    return Money;

  })();

  window.Meal = Meal = (function() {

    function Meal() {
      this.dishes = [];
    }

    Meal.prototype.add = function() {
      var dishes, _ref;
      dishes = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.dishes).push.apply(_ref, dishes);
    };

    Meal.prototype.totalPrice = function() {
      var dish, total, _i, _len, _ref;
      total = new Money;
      _ref = this.dishes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dish = _ref[_i];
        total.cents = total.cents + dish.price.cents;
      }
      return total;
    };

    Meal.prototype.toJson = function() {
      var dish;
      return {
        price: this.totalPrice().toString(),
        dishes: (function() {
          var _i, _len, _ref, _results;
          _ref = this.dishes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            dish = _ref[_i];
            _results.push(dish.toJson());
          }
          return _results;
        }).call(this)
      };
    };

    return Meal;

  })();

}).call(this);
