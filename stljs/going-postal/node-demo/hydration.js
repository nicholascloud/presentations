var postal = require('postal');

var hydration = 100;

var distanceChangeChannel = postal.channel('fitbuddy', 'distance.change'),
  hydrationDecreaseChannel = postal.channel('fitbuddy', 'hydration.decrease');

distanceChangeChannel.subscribe(function (data) {
  hydration -= 15;
  hydrationDecreaseChannel.publish({
    hydration: hydration
  });
}).withConstraint(function (data) {
    return data.distance % 5 === 0;
});

module.exports = {
  rehydrate: function () {
    hydration = 100;
  }
};