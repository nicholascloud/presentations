'use strict';

var strata = require('strata'),
  path = require('path'),
  dataStore = require('./data-store'),
  j2x = require('./j2x'),
  yaml = require('yamljs'),
  appError = require('./app-error');

// constants
var ID_REGEX = /^[\d]+$/;

strata.use(strata.commonLogger);
strata.use(strata.contentType);
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
      if (err && strata.handleError(appError(err), env, callback)) {
        return;
      }

      respond(data, env, callback);
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

    if (err) {

    }

    var id = Number(env.route.id);

    store.fetchOne(id, function (err, data) {
      if (err && strata.handleError(appError(err), env, callback)) {
        return;
      }

      respond(data, env, callback);
    });
  });
});

function respond(data, env, callback) {
  var collectionName = env.route.collection;

  //as XML
  if (env.headers.accept == 'text/xml') {
    j2x(data, collectionName, function (err, xml) {
      if (err && strata.handleError(appError(err), env, callback)) {
        return;
      }

      var headers = {
        'Content-Type': 'text/xml',
        'Content-Length': xml.length
      };
      return callback(200, headers, xml);
    });
  }

  //as JSON
  if (env.headers.accept === 'application/json') {
    var json = JSON.stringify(data);
    var headers = {
      'Content-Type': 'application/json',
      'Content-Length': json.length
    };
    return callback(200, headers, json);
  }

  //as text (yaml)
  var text = yaml.stringify(data);
  var headers = {
    'Content-Type': 'text/plain',
    'Content-Length': text.length
  };
  return callback(200, headers, text);
}

strata.run();