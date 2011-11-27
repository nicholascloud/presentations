(function() {
  var Circle, Shape, Square,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.syntax = window.syntax || {};

  window.syntax["class"] = function() {
    var c, s;
    s = new Square(15);
    console.log(s);
    console.log(s.computeArea());
    c = new Circle(15);
    console.log(c);
    return console.log(c.computeArea());
  };

  Shape = (function() {

    function Shape(width) {
      this.width = width;
    }

    Shape.prototype.computeArea = function() {
      throw new Error('I am an abstract class!');
    };

    return Shape;

  })();

  Square = (function() {

    __extends(Square, Shape);

    function Square() {
      Square.__super__.constructor.apply(this, arguments);
    }

    Square.prototype.computeArea = function() {
      return Math.pow(this.width, 2);
    };

    return Square;

  })();

  Circle = (function() {

    __extends(Circle, Shape);

    function Circle() {
      Circle.__super__.constructor.apply(this, arguments);
    }

    Circle.prototype.radius = function() {
      return this.width / 2;
    };

    Circle.prototype.computeArea = function() {
      return Math.PI * Math.pow(this.radius(), 2);
    };

    return Circle;

  })();

}).call(this);
