var postal = require('postal'),
  EventEmitter = require('events').EventEmitter,
  util = require('util');

function Hydration() {
  var self = this,
    percent = 100;

  var distanceChangeChannel = postal.channel('fitbuddy', 'distance.change');

  distanceChangeChannel.subscribe(function () {
    percent -= 15;
    self.emit('decreased', percent);
  }).withConstraint(function (data) {
      return data.distance % 5 === 0;
  });

  this.rehydrate = function () {
    percent = 100;
  };
}

util.inherits(Hydration, EventEmitter);

var hydration = new Hydration();
var hydrationDecreaseChannel = postal.channel('fitbuddy', 'hydration.decrease');

hydration.on('decreased', function (percent) {
  hydrationDecreaseChannel.publish({
    hydration: percent
  });
});

module.exports = hydration;