(function() {
  var Player, root, scoreMove, tileValues;

  tileValues = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
  };

  scoreMove = function(dictionary, swapCoordinates) {
    var letter, moveScore, multiplier, newWords, word, words, x1, x2, y1, y2, _i, _j, _len, _len2;
    x1 = swapCoordinates.x1, y1 = swapCoordinates.y1, x2 = swapCoordinates.x2, y2 = swapCoordinates.y2;
    words = dictionary.wordsThroughTile(x1, y1).concat(dictionary.wordsThroughTile(x2, y2));
    moveScore = multiplier = 0;
    newWords = [];
    for (_i = 0, _len = words.length; _i < _len; _i++) {
      word = words[_i];
      if (!(dictionary.isWord(word) && dictionary.markUsed(word))) continue;
      multiplier++;
      for (_j = 0, _len2 = word.length; _j < _len2; _j++) {
        letter = word[_j];
        moveScore += tileValues[letter];
      }
      newWords.push(word);
    }
    moveScore *= multiplier;
    return {
      moveScore: moveScore,
      newWords: newWords
    };
  };

  Player = (function() {

    function Player(num, name, dictionary) {
      this.num = num;
      this.name = name;
      if (dictionary != null) this.setDictionary(dictionary);
    }

    Player.prototype.setDictionary = function(dictionary) {
      this.dictionary = dictionary;
      this.score = 0;
      return this.moveCount = 0;
    };

    Player.prototype.makeMove = function(swapCoordinates) {
      var result;
      this.dictionary.grid.swap(swapCoordinates);
      this.moveCount++;
      result = scoreMove(this.dictionary, swapCoordinates);
      this.score += result.moveScore;
      return result;
    };

    Player.prototype.toJSON = function() {
      return {
        num: this.num,
        name: this.name,
        score: this.score
      };
    };

    Player.prototype.toString = function() {
      var _ref;
      return (_ref = this.name) != null ? _ref : 'Unnamed Player';
    };

    return Player;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Player = Player;

}).call(this);
