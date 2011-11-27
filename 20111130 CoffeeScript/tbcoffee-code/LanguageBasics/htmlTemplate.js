(function() {
  var assert, userListItemTemplate;

  userListItemTemplate = function(username) {
    return "<li>\n  <img class=\"avatar\" src=\"avatars/" + username + ".png\" />\n  <span class=\"username\"><a href=\"/" + username + "\">" + username + "</a></span>\n</li>";
  };

  assert = require('assert');

  assert.ok(userListItemTemplate('jack').indexOf('"avatars/jack.png"') > -1);

}).call(this);
