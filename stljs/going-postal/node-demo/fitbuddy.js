var postal = require('postal'),
  distance = require('./distance'),
  elevation = require('./elevation'),
  random = require('./random'),
  pace = require('./pace'),
  hydration = require('./hydration');

var paceChannel = postal.channel('fitbuddy', 'pace'),
  distanceChangeChannel = postal.channel('fitbuddy', 'distance.change'),
  elevationChangeChannel = postal.channel('fitbuddy', 'elevation.change'),
  hydrationChannel = postal.channel('fitbuddy', 'hydration*');

var logged = 0;

paceChannel.subscribe(function (data) {
  logged++;
  if (logged % 7 === 0) {
    var delta = random(-5, 15);
    if (delta < 0) {
      console.log('fitbuddy says: >> Pace yourself -- time to slow down!');
    } else if (delta > 0) {
      console.log('fitbuddy says: >> You can do it -- time to speed up!');
    }
    pace.change(delta, function (err, msg) {
      if (err) return console.error(err);
      console.log(msg);
    });
  }
});

distanceChangeChannel.subscribe(function (data) {
  console.log('ran ' + data.distance + ' feet (' + data.delta + ' fps)');
});

elevationChangeChannel.subscribe(function (data) {
  console.log('elevation changed: ' + data.toString());
}).withThrottle(5000);

hydrationChannel.subscribe(function (data) {
  console.log('fitbuddy says: >> WARNING hydration at ' + data.hydration + '%!');
  hydration.rehydrate();
}).withConstraint(function (data) {
  return data.hydration <= 10;
});

pace.change(150, function (err, msg) {
  if (err) return console.error(err);
  console.log(msg);
});