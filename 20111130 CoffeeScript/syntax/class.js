(function() {
  var MySubclass, MySuperclass,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.syntax = window.syntax || {};

  window.syntax.klass = function() {
    var subclass1, subclass2, superclass;
    superclass = new MySuperclass('SU');
    superclass.log();
    subclass1 = new MySubclass('s1');
    subclass1.log();
    subclass2 = new MySubclass('s2');
    subclass2.log();
    subclass1.setName('s-1');
    subclass1.log();
    return subclass2.log();
  };

  /*
    classes
  */

  window.MySuperclass = MySuperclass = (function() {
    var instancevar;

    function MySuperclass(name) {
      this.name = name;
    }

    MySuperclass.classvar = 0;

    instancevar = 0;

    MySuperclass.prototype.prototypeMethod = function() {
      return "<prototype method invoked, value of instancevar = " + (instancevar != null ? instancevar : '<whoops, undefined>') + ">";
    };

    MySuperclass.classMethod = function() {
      return "<class method invoked, value of instancevar = " + (instancevar != null ? instancevar : '<whoops, undefined>') + ">";
    };

    MySuperclass.prototype.log = function() {
      console.log('MySuperclass.log() -------------');
      console.log("@name = " + this.name);
      console.log("MySuperclass.classvar = " + MySuperclass.classvar);
      console.log("instancevar = " + instancevar);
      console.log("@prototypeMethod() = " + (this.prototypeMethod()));
      return console.log("MySuperclass.classMethod() = " + (MySuperclass.classMethod()));
    };

    return MySuperclass;

  })();

  window.MySubclass = MySubclass = (function() {

    __extends(MySubclass, MySuperclass);

    function MySubclass(name) {
      MySubclass.__super__.constructor.call(this, name);
      MySuperclass.classvar++;
    }

    MySubclass.prototype.log = function() {
      console.log('MySubclass.log() ---------------');
      console.log("@name = " + this.name);
      console.log("instancevar = " + (typeof instancevar !== "undefined" && instancevar !== null ? instancevar : '<whoops, undefined>'));
      console.log("MySuperclass.classvar = " + MySuperclass.classvar);
      console.log("MySubclass.classvar = " + MySubclass.classvar);
      console.log("@prototypeMethod() = " + (this.prototypeMethod()));
      console.log("MySuperclass.classMethod() = " + (MySuperclass.classMethod()));
      return console.log("MySubclass.classMethod() = " + (MySubclass.classMethod()));
    };

    MySubclass.prototype.setName = function(name) {
      return this.name = name;
    };

    return MySubclass;

  })();

}).call(this);
