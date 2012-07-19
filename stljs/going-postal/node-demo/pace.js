var postal = require('postal');

var pace = 0,
  loop = null,
  paceChannel = postal.channel('fitbuddy', 'pace'),
  paceIncreaseChannel = postal.channel('fitbuddy', 'pace.increase'),
  paceDecreaseChannel = postal.channel('fitbuddy', 'pace.decrease'),
  elevationChangeChannel = postal.channel('fitbuddy', 'elevation.change');

var run = function () {
  paceChannel.publish({currentPace: pace});
};

elevationChangeChannel.subscribe(function (data) {
  var paceChange = -(data.delta / 2);
  module.exports.change(paceChange);
});

module.exports = {
  accel: function (increment, callback) {
    setTimeout(function () {
      if (increment === 0) {
        return callback(null, 'no pace change');
      }
      if (loop) {
        clearInterval(loop);
      }
      pace += increment;
      paceIncreaseChannel.publish({newPace: pace});
      loop = setInterval(run, 1000);
      if (callback) {
        callback(null, 'pace/min incremented by ' + increment);
      }
    }, 0);
  },

  decel: function (decrement, callback) {
    setTimeout(function () {
      if (decrement === 0) {
        return callback(null, 'no pace change');
      }
      if (loop) {
        clearInterval(loop);
      }
      pace -= decrement;
      paceDecreaseChannel.publish({newPace: pace});
      loop = setInterval(run, 1000);
      if (callback) {
        callback(null, 'pace/min decremented by ' + decrement);
      }
    }, 0);
  },

  change: function (value, callback) {
    if (value > 0) {
      this.accel(value, callback);
    } else if (value < 0) {
      this.decel(Math.abs(value), callback);
    }
  }
};