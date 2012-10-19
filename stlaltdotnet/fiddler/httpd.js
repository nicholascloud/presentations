var strata = require('strata'),
  path = require('path'),
  dataStore = require('./data-store'),
  appError = require('./app-error');

// constants
var ID_REGEX = /^[\d]+$/,
  AS_JSON = {'Content-Type': 'application/json'};

strata.use(strata.commonLogger);
strata.use(strata.contentType);
strata.use(strata.contentLength);
strata.use(strata.file, path.join(__dirname, 'public'));

strata.get('/', function (env, callback) {
  "use strict";
  strata.redirect(env, callback, '/index.html');
});

strata.get('/:collection', function (env, callback) {
  "use strict";
  dataStore(env.route.collection, function (err, store) {
    if (err && strata.handleError(appError(err), env, callback)) {
      return;
    }

    store.fetchAll(function (err, data) {
      callback(200, AS_JSON, JSON.stringify(data));
    });
  });
});

strata.get('/:collection/:id', function (env, callback) {
  "use strict";
  if (!ID_REGEX.test(env.route.id)) {
    return strata.handleError(appError('invalid identifier'), env, callback);
  }

  dataStore(env.route.collection, function (err, store) {
    if (err && strata.handleError(appError(err), env, callback)) {
      return;
    }

    var id = Number(env.route.id);

    store.fetchOne(id, function (err, data) {
      if (err && strata.handleError(appError(err), env, callback)) {
        return;
      }
      callback(200, AS_JSON, JSON.stringify(data));
    });
  });
});

// end model routes

strata.run();