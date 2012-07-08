var postal = require('postal');

var positionChangeChannel = postal.channel('position.change');

setInterval(function () {
  positionChangeChannel.publish({lat: 0, lon: 0});
}, 50);