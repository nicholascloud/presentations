'use strict';

var util = require('util'),
  strata = require('strata');

function AppError(msg) {
  strata.Error.call(this, msg);
}
util.inherits(AppError, strata.Error);

module.exports = function (msg) {
  if (msg instanceof strata.Error) {
    return msg;
  }
  return new AppError(msg);
};