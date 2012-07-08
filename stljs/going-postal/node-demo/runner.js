var postal = require('postal'),
  pace = require('./pace'),
  gps = require('./gps');

var paceChannel = postal.channel('pace'),
  positionChannel = postal.channel('position.change');

var logged = 0;

console.log('monitoring pace...');

paceChannel.subscribe(function (data) {
  console.log('pace is: ' + data.currentPace);
  logged++;
  if (logged % 5 === 0) {
    pace.accel(500, function (err, msg) {
      if (err) return console.error(err);
      console.log(msg);
    });
  }
  if (logged % 7 === 0) {
    pace.decel(200, function (err, msg) {
      if (err) return console.error(err);
      console.log(msg);
    });
  }
});

positionChannel.subscribe(function (data) {
  console.info('position change: [lat=' + data.lat + ', lon=' + data.lon + ']');
}).withThrottle(6000);