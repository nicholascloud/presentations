(function() {
  var __hasProp = Object.prototype.hasOwnProperty;

  window.syntax = window.syntax || {};

  window.syntax.hash = function() {
    var h1, key, value, _results;
    console.title('hash with braces');
    h1 = {
      name: 'Arnie',
      weapon: 'Bazooka',
      shouts: ['Get to the choppa!', 'Get down!']
    };
    console.log(h1);
    console.title('hashes without braces');
    h1 = {
      name: 'Arnie',
      weapon: 'Machine Gun',
      shouts: ["It's showtime!", "I'll be back."]
    };
    console.log(h1);
    console.title('testing for key in hash');
    h1 = {
      name: 'Arnie',
      weapon: 'Machine Gun',
      shouts: ["It's showtime!", "I'll be back."]
    };
    if ('name' in h1) console.log('true');
    /*
        Iteration
    */
    console.title('iteration over hashes');
    h1 = {
      name: 'Picard',
      ship: 'Enterprise D',
      rank: 'Captain'
    };
    for (key in h1) {
      value = h1[key];
      console.log("" + key + " --> " + value);
    }
    console.title('iteration over owned properties of a hash');
    h1 = {
      name: 'Picard',
      ship: 'Enterprise D',
      rank: 'Captain'
    };
    for (key in h1) {
      if (!__hasProp.call(h1, key)) continue;
      value = h1[key];
      console.log("" + key + " --> " + value);
    }
    console.title('iterating over a hash conditionally');
    h1 = {
      f1: function() {
        return 'f1';
      },
      f2: function() {
        return 'f2';
      },
      f3: function() {
        return 'f3';
      },
      foo: 'foo',
      bar: 'bar'
    };
    _results = [];
    for (key in h1) {
      value = h1[key];
      if (typeof value === 'function') {
        _results.push(console.log("" + key + " --> " + value + " --> " + (value())));
      }
    }
    return _results;
  };

}).call(this);
