module.exports = function (toTry, callback) {
  "use strict";
  var err = null,
    data = null;
  try {
    data = toTry();
  } catch (e) {
    err = e;
  }
  if (err) return callback(err);
  callback(null, data);
};