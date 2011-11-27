(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (__hasProp.call(this, i) && this[i] === item) return i; } return -1; };

  window.syntax = window.syntax || {};

  window.syntax.comprehension = function() {
    /*
        Comprehension
    */
    var a, attempt, attempts, b, h, key, makeAttempt, name, r, value;
    console.title('creating an array through comprehension');
    a = ['Kirk', 'Spock', 'Ohura', 'Checkov'];
    b = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        name = a[_i];
        _results.push(name[0]);
      }
      return _results;
    })();
    console.log(b);
    console.title('creating an array through comprehension');
    attempt = 1;
    makeAttempt = function() {
      if (attempt++ < 10) {
        return true;
      } else {
        return false;
      }
    };
    attempts = ((function() {
      var _results;
      _results = [];
      while (a = makeAttempt()) {
        _results.push(a);
      }
      return _results;
    })());
    console.log(attempts);
    console.title('creating an array through comprehension');
    h = {
      65: 'A',
      66: 'B',
      67: 'C',
      68: 'D',
      70: 'F'
    };
    a = ['A', 'C', 'D'];
    r = (function() {
      var _results;
      _results = [];
      for (key in h) {
        value = h[key];
        if (__indexOf.call(a, value) >= 0) _results.push(key);
      }
      return _results;
    })();
    return console.log(r);
  };

}).call(this);
