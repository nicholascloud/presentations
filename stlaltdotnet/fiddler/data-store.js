'use strict';

var fs = require('fs'),
  path = require('path'),
  trycatch = require('./trycatch');

var DATA_PATH = path.join(__dirname, 'data'),
  cachedStores = {};

function load(path, callback) {
  fs.readFile(path, function (err, text) {
    if (err) return callback(err);
    trycatch(function () {
      return JSON.parse(text);
    }, function (err, data) {
      if (err) return callback(err);
      callback(null, data);
    });
  });
}

function save(path, data, callback) {
  trycatch(function () {
    return JSON.stringify(data);
  }, function (err, text) {
    if (err) return callback(err);
    fs.writeFile(path, text, callback);
  });
}

function connectStore(store, callback) {
  var dataFile = store + '.json',
    dataPath = path.join(DATA_PATH, dataFile),
    dataSet = [];

  var api = {
    file: dataFile,
    path: dataPath,

    fetchAll: function (callback) {
      callback(null, dataSet);
    },

    fetchOne: function (id, callback) {
      this.fetchMany([id], function (err, many) {
        if (err) return callback(err);
        if (many.length === 0) {
          return callback('Invalid id `' + id + '`');
        }
        callback(null, many[0]);
      });
    },

    fetchMany: function (ids, callback) {
      if (!ids || ids.length === 0) return callback(null, []);
      var many = dataSet.filter(function (item) {
        return ids.indexOf(item.id) > -1;
      });
      callback(null, many);
    },

    update: function (items, callback) {
      callback('`update` has not been implemented');
    },

    remove: function (items, callback) {
      callback('`remove` has not been implemented');
    },

    flush: function (callback) {
      save(dataPath, dataSet, callback);
    },

    dispose: function (callback) {
      this.flush(function (err) {
        if (err) return callback(err);
        delete cachedStores[store];
        callback(null);
      });
    }
  };

  load(dataPath, function (err, data) {
    if (err) return callback(err);
    dataSet = data;
    callback(null, api);
  });
}

module.exports = function (storeName, callback) {
  if (cachedStores.hasOwnProperty(storeName)) {
    console.log('==>', 'using cached data store', storeName);
    return callback(null, cachedStores[storeName]);
  }
  console.log('==>', 'connecting data store', storeName);
  connectStore(storeName, function (err, dataStore) {
    if (err) return callback(err);
    cachedStores[storeName] = dataStore;
    callback(null, dataStore);
  });
};