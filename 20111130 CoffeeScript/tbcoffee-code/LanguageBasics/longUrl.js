(function() {
  var assert, longUrl;

  longUrl = 'http://intergalacticplanetary\
           planetaryintergalactic.com';

  assert = require('assert');

  assert.equal(longUrl, 'http://intergalacticplanetaryplanetaryintergalactic.com');

}).call(this);
