var postal = require('postal'),
  random = require('./random');

var changeChannel = postal.channel('fitbuddy', 'elevation.change');

var currentElevation = 465; //avg. St. Louis

var changeElevation = function () {
  var delta = random(-5, +5);
  currentElevation += delta;
  changeChannel.publish({
    delta: delta,
    elevation: currentElevation,
    increased: function () {
      return delta > 0;
    },
    decreased: function () {
      return delta < 0;
    },
    toString: function () {
      return this.elevation + "', delta: " + this.delta;
    }
  });
};

var loop = null;

setInterval(function () {
  if (loop) {
    clearInterval(loop);
  }
  setInterval(function () {
    changeElevation();
  }, random(1000, 3000));
}, 10000);