'use strict';
var strata = require('strata'),
  bus = require('./bus');

strata.get('/', function (env, cb) {
  strata.redirect(env, cb, '/index.html');
});

strata.put('/raffle', function (env, cb) {
  var req = strata.Request(env);
  req.params(function (err, params) {
    if (err && strata.handleError(err, env, cb)) {
      return;
    }

    bus.raffle.publish({
      topic: 'contestants.submitted',
      data: (params.contestants || '')
    });

    cb(200, {}, 'choosing a winner...');
  });
});