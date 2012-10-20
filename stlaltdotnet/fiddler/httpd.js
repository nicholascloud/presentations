'use strict';

var strata = require('strata'),
  path = require('path'),
  dataStore = require('./data-store'),
  j2x = require('./j2x'),
  appError = require('./app-error');

// constants
var ID_REGEX = /^[\d]+$/,
  AS_JSON = {'Content-Type': 'application/json'},
  AS_XML = {'Content-Type': 'text/xml'};

strata.use(strata.commonLogger);
strata.use(strata.contentType);
strata.use(strata.contentLength);
strata.use(strata.file, path.join(__dirname, 'public'));

strata.get('/', function (env, callback) {
  strata.redirect(env, callback, '/index.html');
});

strata.get('/:collection', function (env, callback) {
  var collectionName = env.route.collection;
  dataStore(collectionName, function (err, store) {
    if (err && strata.handleError(appError(err), env, callback)) {
      return;
    }

    store.fetchAll(function (err, data) {
      if (env.headers.accept == 'text/xml') {
        j2x(data, collectionName, function (err, xml) {
          if (err && strata.handleError(appError(err), env, callback)) {
            return;
          }

          return callback(200, AS_XML, xml);
        });
      }
      callback(200, AS_JSON, JSON.stringify(data));
    });
  });
});

strata.get('/:collection/:id', function (env, callback) {
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

strata.run();