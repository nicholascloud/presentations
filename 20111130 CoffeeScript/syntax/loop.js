
  window.syntax = window.syntax || {};

  window.syntax.loops = function() {
    /*
        Loop
    */
    var c, captains, count, key, log, ship, value, _i, _len, _results;
    console.title('`loop` will execute until a break statement');
    count = 99;
    while (true) {
      console.log(count + ' bottles of beer on the wall!');
      count--;
      if (count === 80) break;
    }
    /*
        For loop
    */
    console.title('`for` loop iterates over an array with the `in` keyword');
    captains = ['Kirk', 'Picard', 'Janeway', 'Cisco', 'Archer'];
    for (_i = 0, _len = captains.length; _i < _len; _i++) {
      c = captains[_i];
      console.log(c);
    }
    console.title('`for` loop iterates over properties in an object/hash with the `of` keyword');
    ship = {
      captain: 'Picard',
      designation: 'NCC 1701D',
      classification: 'Galaxy'
    };
    for (key in ship) {
      value = ship[key];
      console.log("" + key + " = " + value);
    }
    /*
        While loop
    */
    console.title('`while` loop will execute as long as a condition is true');
    count = 10;
    log = function(count) {
      return console.log('iteration ' + count);
    };
    while (count-- > 0) {
      log(count);
    }
    /*
        Until loop
    */
    console.title('`until` loop will execute until a condition is false');
    count = 10;
    log = function(count) {
      return console.log('iteration ' + count);
    };
    _results = [];
    while (count-- !== 0) {
      _results.push(log(count));
    }
    return _results;
  };
