require.config({
  paths: {
    jquery: 'lib/jquery-1.7.2.min',
    underscore: 'lib/underscore-min',
    postal: 'lib/postal.min',
    diagnostics: 'lib/postal.diagnostics.min'
  }
});

require(['jquery', 'postal'], function ($, postal) {
var c = postal.channel('dhs.track.movement');
c.subscribe(function (pos) {
  document.write('Moved to ' + pos + '<br />');
}).withThrottle(2000);

//var moved = 0;
(function move (timesMoved) {
  if (timesMoved === 50) return;
  c.publish(timesMoved);
  setTimeout(function () {
    move(timesMoved + 1);
  }, 500);
}(0));
});