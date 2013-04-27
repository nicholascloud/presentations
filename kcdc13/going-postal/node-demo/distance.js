var postal = require('postal');

var distance = 0,
  currentPace = 0,
  paceChangeChannel = postal.channel('fitbuddy', 'pace.#'),
  distanceChangeChannel = postal.channel('fitbuddy', 'distance.change');

setInterval(function () {
  var delta = currentPace / 60
  distance += delta;
  distanceChangeChannel.publish({
    distance: Math.floor(distance),
    delta: delta.toPrecision(4)
  });
}, 1000);

paceChangeChannel.subscribe(function (data) {
  currentPace = data.newPace;
});