Array.prototype.contains = function (what) {
  var contains = false;

  //do a strict comparison
  if (typeof what !== 'function') {
    this.forEach(function (item) {
      if (contains) return;
      contains = (item === what);
    });
    return contains;
  }

  //compare with an evaluator
  this.forEach(function (item) {
    if (contains) return;
    contains = what(item);
  });
  return contains;
};



require.config({
  paths: {
    jquery: 'lib/jquery-1.7.2.min',
    underscore: 'lib/underscore',
    postal: 'lib/postal',
    diagnostics: 'lib/postal.diagnostics'
  }
});

require(['jquery', 'postal', 'tagCloud', 'offers', 'search'], function ($, bus) {
  $().ready(function () {
    bus.channel('ready').publish({});
    bus.channel('categories.changed').publish(['art']);
  });
});