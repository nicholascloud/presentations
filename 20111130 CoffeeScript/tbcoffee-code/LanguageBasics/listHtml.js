(function() {
  var assert, listHtml;

  listHtml = '<ul>\n  <li>Amazing!</li>\n  <li>Extraordinary!</li>\n  <li>Superlative!</li>\n</ul>';

  assert = require('assert');

  assert.equal(listHtml, '<ul>\n  <li>Amazing!</li>\n  <li>Extraordinary!</li>\n  <li>Superlative!</li>\n</ul>');

}).call(this);
