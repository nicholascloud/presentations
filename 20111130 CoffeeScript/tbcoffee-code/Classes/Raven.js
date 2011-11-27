(function() {
  var Raven, raven1, raven2;

  Raven = function() {};

  Raven.prototype.quoth = function() {
    return console.log('Nevermore');
  };

  raven1 = new Raven();

  raven1.quoth();

  Raven.prototype.quoth = function() {
    return console.log("I'm hungry");
  };

  raven1.quoth();

  raven2 = new Raven();

  raven2.quoth = function() {
    return console.log("I'm my own kind of raven");
  };

  raven1.quoth();

  raven2.quoth();

  console.log(raven1.hasOwnProperty('quoth'));

  console.log(raven2.hasOwnProperty('quoth'));

}).call(this);
