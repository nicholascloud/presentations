'use strict';
var strata = require('strata'),
  path = require('path'),
  raffle = require('./raffle');

var sockets = [];

strata.use(strata.commonLogger);
strata.use(strata.contentType);
strata.use(strata.contentLength);
strata.use(strata.file, path.join(__dirname, 'public'));
require('./routes');
var server = strata.run({port: 1981});
require('./socket')(server);