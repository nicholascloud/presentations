(function() {
  var Cart, Discount, OrderDiscount, Product, ProductDiscount,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
    __slice = Array.prototype.slice;

  window.syntax = window.syntax || {};

  window.syntax.klass2 = function() {
    var cart, d1, d2, log;
    log = function(cart) {
      console.log("subtotal: $" + (cart.subtotal()));
      console.log("total:    $" + (cart.total()));
      console.log("items:     " + cart.items);
      return console.log("discounts: " + cart.discounts);
    };
    cart = new Cart();
    cart.addItem(new Product('Jeans', 25)).addItem(new Product('Shirt', 10)).addItem(new Product('Shoes', 30)).addItem(new Product('Jacket', 50));
    /*
      cart.addItem({price: 30})
      cart.addItem({price: 20})
      cart.addItem({price: 10})
      cart.addItem({price: 50})
    */
    console.title('Cart with items');
    log(cart);
    d1 = new ProductDiscount(25, 0.15);
    d2 = new OrderDiscount(0.10);
    cart.applyDiscount(d1);
    cart.applyDiscount(d2);
    console.title('Cart with discounts');
    return log(cart);
  };

  /*
    classes
  */

  window.Discount = Discount = (function() {

    function Discount(rate) {
      this.rate = rate;
    }

    Discount.prototype.calc = function(cart) {
      throw 'abstract method';
    };

    return Discount;

  })();

  window.ProductDiscount = ProductDiscount = (function() {

    __extends(ProductDiscount, Discount);

    function ProductDiscount(threshold, rate) {
      this.threshold = threshold;
      ProductDiscount.__super__.constructor.call(this, rate);
    }

    ProductDiscount.prototype.calc = function(cart) {
      var item, prices;
      prices = (function() {
        var _i, _len, _ref, _results;
        _ref = cart.items;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          if (item.price > this.threshold) _results.push(item.price);
        }
        return _results;
      }).call(this);
      console.debug(prices, 'ProductDiscount');
      if (prices.length === 0) return 0;
      prices.reduce(function(sum, price) {
        console.log(price, this.rate);
        return sum + (price * this.rate);
      });
      return console.debug(r, 'ProductDiscount');
    };

    ProductDiscount.prototype.toString = function() {
      return "" + this.rate + "% off on items over $" + this.threshold;
    };

    return ProductDiscount;

  })();

  window.OrderDiscount = OrderDiscount = (function() {

    __extends(OrderDiscount, Discount);

    function OrderDiscount() {
      OrderDiscount.__super__.constructor.apply(this, arguments);
    }

    OrderDiscount.prototype.calc = function(cart) {
      return cart.subtotal() * this.rate;
    };

    OrderDiscount.prototype.toString = function() {
      return "" + this.rate + "% off order subtotal";
    };

    return OrderDiscount;

  })();

  window.Cart = Cart = (function() {

    function Cart() {
      this.items = [];
      this.discounts = [];
    }

    Cart.prototype.addItem = function(item) {
      this.items.push(item);
      return this;
    };

    Cart.prototype.addItems = function() {
      var item, _ref;
      item = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.items).push.apply(_ref, item);
    };

    Cart.prototype.applyDiscount = function(discount) {
      return this.discounts.push(discount);
    };

    Cart.prototype.subtotal = function() {
      var item, subtotal;
      subtotal = 0;
      return ((function() {
        var _i, _len, _ref, _results;
        _ref = this.items;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          _results.push(subtotal += item.price);
        }
        return _results;
      }).call(this)).pop();
    };

    Cart.prototype.discountTotal = function() {
      var discount, toDiscount;
      toDiscount = (function() {
        var _i, _len, _ref, _results;
        _ref = this.discounts;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          discount = _ref[_i];
          _results.push(discount.calc(this));
        }
        return _results;
      }).call(this);
      console.debug(toDiscount, 'Cart');
      if (toDiscount.length === 0) return 0;
      return toDiscount.reduce(function(sum, amt) {
        return sum + amt;
      });
    };

    Cart.prototype.total = function() {
      return this.subtotal() - this.discountTotal();
    };

    return Cart;

  })();

  window.Product = Product = (function() {

    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    Product.prototype.toString = function() {
      return "" + this.name + " $" + this.price;
    };

    return Product;

  })();

}).call(this);
