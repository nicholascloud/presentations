(function() {
  var odd;

  odd = function(num) {
    if (typeof num === 'number') {
      if (num === Math.round(num)) {
        if (num > 0) {
          return num % 2 === 1;
        } else {
          throw "" + num + " is not positive";
        }
      } else {
        throw "" + num + " is not an integer";
      }
    } else {
      throw "" + num + " is not a number";
    }
  };

  try {
    odd(5.1);
  } catch (e) {
    console.log(e);
  }

  odd = function(num) {
    if (typeof num !== 'number') throw "" + num + " is not a number";
    if (num !== Math.round(num)) throw "" + num + " is not an integer";
    if (!(num > 0)) throw "" + num + " is not positive";
    return num % 2 === 1;
  };

  try {
    odd(5.1);
  } catch (e) {
    console.log(e);
  }

}).call(this);
