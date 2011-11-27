(function() {
  var assert, cube, cubedList, list, num;

  cube = function(num) {
    return Math.pow(num, 3);
  };

  list = [1, 2, 3, 4, 5];

  cubedList = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      num = list[_i];
      _results.push(cube(num));
    }
    return _results;
  })();

  assert = require('assert');

  assert.deepEqual(cubedList, [1, 8, 27, 64, 125]);

}).call(this);
