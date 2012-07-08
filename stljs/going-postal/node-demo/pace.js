var postal = require('postal');

var pace = 2000;

var paceChannel = postal.channel('pace');
var paceChangeChannel = postal.channel('pace.change');

var simulateRun = function () {
  paceChannel.publish({currentPace: pace});
};

var loop = setInterval(simulateRun, pace);

exports.accel = function (increment, callback) {

  setTimeout(function () {
    if ((pace - increment) <= 100) {
      pace = 100;
      return callback('PACE CANNOT CANNOT BE HIGHER THAN 100');
    }
    clearInterval(loop);
    pace -= increment;
    loop = setInterval(simulateRun, pace);
    callback(null, 'pace incremented by ' + increment);
  }, 0);
};

exports.decel = function (decrement, callback) {

  setTimeout(function () {
    if ((pace + decrement) >= 5000) {
      pace = 5000;
      return callback('PACE CANNOT BE LOWER THAN 5000');
    }
    clearInterval(loop);
    pace += decrement;
    loop = setInterval(simulateRun, pace);
    callback(null, 'pace decremented by ' + decrement);
  }, 0);
};