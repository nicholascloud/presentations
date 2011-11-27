(function() {
  var $, assert, hexMD5, passwordHash, sendPasswordHashToServer;

  $ = {
    ajax: function(obj) {
      return obj.data;
    }
  };

  hexMD5 = function(str) {
    return 'hex' + str;
  };

  passwordHash = 'e2fc714c4727ee9395f324cd2e7f331f';

  sendPasswordHashToServer = function(password) {
    passwordHash = hexMD5(password);
    return $.ajax({
      data: passwordHash
    });
  };

  assert = require('assert');

  assert.equal(passwordHash, 'e2fc714c4727ee9395f324cd2e7f331f');

  sendPasswordHashToServer('password');

  assert.equal(passwordHash, 'hexpassword');

}).call(this);
