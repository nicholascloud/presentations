(function() {
  var fileContents, fs, owl2, wordList;

  fs = require('fs');

  owl2 = fs.readFileSync('OWL2.txt', 'utf8');

  wordList = owl2.match(/^(\w+)/mg);

  fileContents = "root = typeof exports === \"undefined\" ? window : exports;\nroot.OWL2 = ['" + (wordList.join("',\n'")) + "']";

  fs.writeFile('OWL2.js', fileContents);

}).call(this);
