(function() {
  var GRID_SIZE, MIN_WORD_LENGTH, alphabet, count, fs, grid, inRange, inputCallback, isInteger, isWord, letter, moveCount, owl2, printGrid, promptForTile1, promptForTile2, randomLetter, score, scoreMove, stdin, strToCoordinates, tileCounts, tileValues, totalTiles, usedWords, word, wordList, wordsThroughTile, x, y,
    __hasProp = Object.prototype.hasOwnProperty,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (__hasProp.call(this, i) && this[i] === item) return i; } return -1; };

  GRID_SIZE = 5;

  MIN_WORD_LENGTH = 2;

  fs = require('fs');

  owl2 = fs.readFileSync('OWL2.txt', 'utf8');

  wordList = owl2.match(/^(\w+)/mg);

  wordList = (function() {
    var _i, _len, _results;
    _results = [];
    for (_i = 0, _len = wordList.length; _i < _len; _i++) {
      word = wordList[_i];
      if (word.length <= GRID_SIZE) _results.push(word);
    }
    return _results;
  })();

  isWord = function(str) {
    return __indexOf.call(wordList, str) >= 0;
  };

  tileCounts = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1
  };

  totalTiles = 0;

  for (letter in tileCounts) {
    count = tileCounts[letter];
    totalTiles += count;
  }

  alphabet = ((function() {
    var _results;
    _results = [];
    for (letter in tileCounts) {
      _results.push(letter);
    }
    return _results;
  })()).sort();

  randomLetter = function() {
    var letter, randomNumber, x, _i, _len;
    randomNumber = Math.ceil(Math.random() * totalTiles);
    x = 1;
    for (_i = 0, _len = alphabet.length; _i < _len; _i++) {
      letter = alphabet[_i];
      x += tileCounts[letter];
      if (x > randomNumber) return letter;
    }
  };

  grid = (function() {
    var _results;
    _results = [];
    for (x = 0; 0 <= GRID_SIZE ? x < GRID_SIZE : x > GRID_SIZE; 0 <= GRID_SIZE ? x++ : x--) {
      _results.push((function() {
        var _results2;
        _results2 = [];
        for (y = 0; 0 <= GRID_SIZE ? y < GRID_SIZE : y > GRID_SIZE; 0 <= GRID_SIZE ? y++ : y--) {
          _results2.push(randomLetter());
        }
        return _results2;
      })());
    }
    return _results;
  })();

  printGrid = function() {
    var i, row, rowSeparator, rowStrings, rows, x, y;
    rows = (function() {
      var _results;
      _results = [];
      for (x = 0; 0 <= GRID_SIZE ? x < GRID_SIZE : x > GRID_SIZE; 0 <= GRID_SIZE ? x++ : x--) {
        _results.push((function() {
          var _results2;
          _results2 = [];
          for (y = 0; 0 <= GRID_SIZE ? y < GRID_SIZE : y > GRID_SIZE; 0 <= GRID_SIZE ? y++ : y--) {
            _results2.push(grid[y][x]);
          }
          return _results2;
        })());
      }
      return _results;
    })();
    rowStrings = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = rows.length; _i < _len; _i++) {
        row = rows[_i];
        _results.push(' ' + row.join(' | '));
      }
      return _results;
    })();
    rowSeparator = ((function() {
      var _ref, _results;
      _results = [];
      for (i = 1, _ref = GRID_SIZE * 4; 1 <= _ref ? i < _ref : i > _ref; 1 <= _ref ? i++ : i--) {
        _results.push('-');
      }
      return _results;
    })()).join('');
    return console.log('\n' + rowStrings.join("\n" + rowSeparator + "\n") + '\n');
  };

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

  moveCount = 0;

  score = 0;

  usedWords = [];

  scoreMove = function(grid, swapCoordinates) {
    var letter, moveScore, multiplier, newWords, word, words, x1, x2, y1, y2, _i, _j, _len, _len2;
    x1 = swapCoordinates.x1, x2 = swapCoordinates.x2, y1 = swapCoordinates.y1, y2 = swapCoordinates.y2;
    words = wordsThroughTile(grid, x1, y1).concat(wordsThroughTile(grid, x2, y2));
    moveScore = multiplier = 0;
    newWords = [];
    for (_i = 0, _len = words.length; _i < _len; _i++) {
      word = words[_i];
      if (!(__indexOf.call(usedWords, word) < 0 && __indexOf.call(newWords, word) < 0)) {
        continue;
      }
      multiplier++;
      for (_j = 0, _len2 = word.length; _j < _len2; _j++) {
        letter = word[_j];
        moveScore += tileValues[letter];
      }
      newWords.push(word);
    }
    usedWords = usedWords.concat(newWords);
    moveScore *= multiplier;
    return {
      moveScore: moveScore,
      newWords: newWords
    };
  };

  inRange = function(x, y) {
    return (0 <= x && x < GRID_SIZE) && (0 <= y && y < GRID_SIZE);
  };

  wordsThroughTile = function(grid, x, y) {
    var addTiles, length, offset, range, str, strings, _i, _len, _results;
    strings = [];
    for (length = MIN_WORD_LENGTH; MIN_WORD_LENGTH <= GRID_SIZE ? length <= GRID_SIZE : length >= GRID_SIZE; MIN_WORD_LENGTH <= GRID_SIZE ? length++ : length--) {
      range = length - 1;
      addTiles = function(func) {
        var i;
        return strings.push(((function() {
          var _results;
          _results = [];
          for (i = 0; 0 <= range ? i <= range : i >= range; 0 <= range ? i++ : i--) {
            _results.push(func(i));
          }
          return _results;
        })()).join(''));
      };
      for (offset = 0; 0 <= length ? offset < length : offset > length; 0 <= length ? offset++ : offset--) {
        if (inRange(x - offset, y) && inRange(x - offset + range, y)) {
          addTiles(function(i) {
            return grid[x - offset + i][y];
          });
        }
        if (inRange(x, y - offset) && inRange(x, y - offset + range)) {
          addTiles(function(i) {
            return grid[x][y - offset + i];
          });
        }
        if (inRange(x - offset, y - offset) && inRange(x - offset + range, y - offset + range)) {
          addTiles(function(i) {
            return grid[x - offset + i][y - offset + i];
          });
        }
        if (inRange(x - offset, y + offset) && inRange(x - offset + range, y + offset - range)) {
          addTiles(function(i) {
            return grid[x - offset + i][y + offset - i];
          });
        }
      }
    }
    _results = [];
    for (_i = 0, _len = strings.length; _i < _len; _i++) {
      str = strings[_i];
      if (isWord(str)) _results.push(str);
    }
    return _results;
  };

  console.log("Welcome to 5x5!");

  for (x = 0; 0 <= GRID_SIZE ? x < GRID_SIZE : x > GRID_SIZE; 0 <= GRID_SIZE ? x++ : x--) {
    for (y = 0; 0 <= GRID_SIZE ? y < GRID_SIZE : y > GRID_SIZE; 0 <= GRID_SIZE ? y++ : y--) {
      scoreMove(grid, {
        x1: x,
        x2: x,
        y1: y,
        y2: y
      });
    }
  }

  if (usedWords.length !== 0) {
    console.log("Initially used words:\n" + (usedWords.join(', ')));
  }

  console.log("Please choose a tile in the form (x, y).");

  stdin = process.openStdin();

  stdin.setEncoding('utf8');

  inputCallback = null;

  stdin.on('data', function(input) {
    return inputCallback(input);
  });

  promptForTile1 = function() {
    printGrid();
    console.log("Please enter coordinates for the first tile.");
    return inputCallback = function(input) {
      var _ref;
      try {
        _ref = strToCoordinates(input), x = _ref.x, y = _ref.y;
      } catch (e) {
        console.log(e);
        return;
      }
      return promptForTile2(x, y);
    };
  };

  promptForTile2 = function(x1, y1) {
    console.log("Please enter coordinates for the second tile.");
    return inputCallback = function(input) {
      var moveScore, newWords, x2, y2, _ref, _ref2, _ref3;
      try {
        _ref = strToCoordinates(input), x2 = _ref.x, y2 = _ref.y;
      } catch (e) {
        console.log(e);
        return;
      }
      if (x1 === x2 && y1 === y2) {
        return console.log("The second tile must be different from the first.");
      } else {
        console.log("Swapping (" + x1 + ", " + y1 + ") with (" + x2 + ", " + y2 + ")...");
        x1--;
        x2--;
        y1--;
        y2--;
        _ref2 = [grid[x2][y2], grid[x1][y1]], grid[x1][y1] = _ref2[0], grid[x2][y2] = _ref2[1];
        _ref3 = scoreMove(grid, {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        }), moveScore = _ref3.moveScore, newWords = _ref3.newWords;
        if (moveScore !== 0) {
          console.log("  You formed the following word(s):\n  " + (newWords.join(', ')) + "\n");
          score += moveScore;
        }
        moveCount++;
        console.log("Your score after " + moveCount + " moves: " + score);
        return promptForTile1();
      }
    };
  };

  isInteger = function(num) {
    return num === Math.round(num);
  };

  strToCoordinates = function(input) {
    var halves;
    halves = input.split(',');
    if (halves.length === 2) {
      x = parseFloat(halves[0]);
      y = parseFloat(halves[1]);
      if (!isInteger(x) || !isInteger(y)) {
        throw "Each coordinate must be an integer.";
      } else if (!inRange(x - 1, y - 1)) {
        throw "Each coordinate must be between 1 and " + GRID_SIZE + ".";
      } else {
        return {
          x: x,
          y: y
        };
      }
    } else {
      throw 'Input must be of the form `x, y`.';
    }
  };

  promptForTile1();

}).call(this);
