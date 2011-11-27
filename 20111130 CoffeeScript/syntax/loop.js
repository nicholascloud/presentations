
  window.syntax = window.syntax || {};

  window.syntax.loops = function() {
    /*
        Loop
    */
    var count, log, _results;
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
