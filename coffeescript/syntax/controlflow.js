(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (__hasProp.call(this, i) && this[i] === item) return i; } return -1; };

  window.syntax = window.syntax || {};

  window.syntax.controlflow = function() {
    /*
        `if` expressions
    */
    var destroyed, destroyers, drink, everyoneDies, launch;
    console.title('`if` expressions are straight-forward');
    drink = 'coffee';
    if (drink === 'coffee') {
      console.log('nom nom nom');
    } else {
      console.log('gimme coffee!');
    }
    console.title('`if` expressions can be evaluated on a single line');
    destroyers = ['zombies', 'aliens', 'robots'];
    if (__indexOf.call(destroyers, 'vampires') >= 0) destroyed = true;
    cosole.log("are we destroyed? " + destroyed);
    console.title('the `unless` keyword is shorthand for a negative if condition');
    launch = function() {
      return console.log('missles away!');
    };
    everyoneDies = true;
    if (!everyoneDies) return launch();
    /*
        `switch` expressions
    */
  };

}).call(this);
