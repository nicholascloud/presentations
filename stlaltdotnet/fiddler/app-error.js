var util = require('util'),
  strata = require('strata');

function AppError(msg) {
  "use strict";
  strata.Error.call(this, msg);
}
util.inherits(AppError, strata.Error);

module.exports = function (msg) {
  "use strict";
  return new AppError(msg);
};