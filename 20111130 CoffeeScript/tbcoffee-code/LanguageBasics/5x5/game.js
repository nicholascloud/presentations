(function() {
  var GRID_SIZE, MIN_WORD_LENGTH, alphabet, count, dictionary, fs, getPossibleWords, grid, inRange, letter, line, moveCount, newMove, printGrid, randomLetter, score, scoreMove, stdin, text, tileCounts, tileValues, totalTiles, usedWords, validateInput, word, x, x1, x2, y, y1, y2, _i, _len, _ref;

  fs = require('fs');

  dictionary = [];

  text = fs.readFileSync('OWL2.txt', 'utf8');

  _ref = text.split(/\n/);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    line = _ref[_i];
    word = line.split(/\s/)[0];
    if (word !== '') dictionary.push(word);
  }

  usedWords = [];

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

  alphabet = (function() {
    var _results;
    _results = [];
    for (letter in tileCounts) {
      _results.push(letter);
    }
    return _results;
  })();

  alphabet.sort();

  randomLetter = function() {
    var letter, randomNumber, x, _j, _len2;
    randomNumber = Math.ceil(Math.random() * totalTiles);
    x = 1;
    for (_j = 0, _len2 = alphabet.length; _j < _len2; _j++) {
      letter = alphabet[_j];
      x += tileCounts[letter];
      if (x > randomNumber) return letter;
    }
  };

  GRID_SIZE = 5;

  MIN_WORD_LENGTH = 2;

  grid = [];

  for (x = 0; 0 <= GRID_SIZE ? x < GRID_SIZE : x > GRID_SIZE; 0 <= GRID_SIZE ? x++ : x--) {
    grid[x] = [];
    for (y = 0; 0 <= GRID_SIZE ? y < GRID_SIZE : y > GRID_SIZE; 0 <= GRID_SIZE ? y++ : y--) {
      grid[x][y] = randomLetter();
    }
  }

  inRange = function(x, y) {
    return (0 <= x && x < GRID_SIZE) && (0 <= y && y < GRID_SIZE);
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

  getPossibleWords = function(grid, x, y) {
    var addTiles, length, offset, possibleWords, range, _ref2;
    _ref2 = [parseInt(x, 10), parseInt(y, 10)], x = _ref2[0], y = _ref2[1];
    possibleWords = [];
    for (length = MIN_WORD_LENGTH; MIN_WORD_LENGTH <= GRID_SIZE ? length <= GRID_SIZE : length >= GRID_SIZE; MIN_WORD_LENGTH <= GRID_SIZE ? length++ : length--) {
      range = length - 1;
      addTiles = function(func) {
        var i;
        return possibleWords.push(((function() {
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
    return possibleWords;
  };

  scoreMove = function(oldGrid, newGrid) {
    var cell, col, letter, moveScore, newWords, possibleWords, str, word, x, y, _j, _k, _l, _len2, _len3, _len4;
    newWords = [];
    for (x in newGrid) {
      col = newGrid[x];
      for (y in col) {
        cell = col[y];
        if (!oldGrid || cell !== oldGrid[x][y]) {
          possibleWords = getPossibleWords(newGrid, x, y);
          for (_j = 0, _len2 = possibleWords.length; _j < _len2; _j++) {
            str = possibleWords[_j];
            if (dictionary.indexOf(str) !== -1 && usedWords.indexOf(str) === -1) {
              newWords.push(str);
              usedWords.push(str);
            }
          }
        }
      }
    }
    moveScore = 0;
    for (_k = 0, _len3 = newWords.length; _k < _len3; _k++) {
      word = newWords[_k];
      for (_l = 0, _len4 = word.length; _l < _len4; _l++) {
        letter = word[_l];
        moveScore += tileValues[letter];
      }
    }
    moveScore *= newWords.length;
    return {
      moveScore: moveScore,
      newWords: newWords
    };
  };

  printGrid = function() {
    var i, row, rowSeparator, rowStrings, rows, x, y;
    rows = [];
    for (y = 0; 0 <= GRID_SIZE ? y < GRID_SIZE : y > GRID_SIZE; 0 <= GRID_SIZE ? y++ : y--) {
      rows[y] = (function() {
        var _results;
        _results = [];
        for (x = 0; 0 <= GRID_SIZE ? x < GRID_SIZE : x > GRID_SIZE; 0 <= GRID_SIZE ? x++ : x--) {
          _results.push(grid[x][y]);
        }
        return _results;
      })();
    }
    rowStrings = (function() {
      var _j, _len2, _results;
      _results = [];
      for (_j = 0, _len2 = rows.length; _j < _len2; _j++) {
        row = rows[_j];
        _results.push(' ' + row.join(' | '));
      }
      return _results;
    })();
    rowSeparator = ((function() {
      var _ref2, _results;
      _results = [];
      for (i = 1, _ref2 = GRID_SIZE * 4; 1 <= _ref2 ? i < _ref2 : i > _ref2; 1 <= _ref2 ? i++ : i--) {
        _results.push('-');
      }
      return _results;
    })()).join('');
    return console.log('\n' + rowStrings.join("\n" + rowSeparator + "\n") + '\n');
  };

  console.log("Welcome to 5x5!");

  printGrid();

  scoreMove(null, grid);

  if (usedWords.length !== 0) {
    console.log("Initially used words:");
    console.log(usedWords.join(', '));
  }

  console.log("Please choose a tile in the form (x, y).");

  validateInput = function(input) {
    if (input.split(',').length === 2) {
      x = input.split(',')[0].replace(/\s/, '');
      y = input.split(',')[1].replace(/\s/, '');
      if (!inRange(x - 1, y - 1)) {
        throw "Each coordinate must be between 1 and " + GRID_SIZE;
      } else {
        return {
          x: x,
          y: y
        };
      }
    } else {
      throw 'Input must be of the form `x, y`';
    }
  };

  x1 = x2 = y1 = y2 = null;

  newMove = true;

  score = 0;

  moveCount = 0;

  stdin = process.openStdin();

  stdin.setEncoding('utf8');

  stdin.on('data', function(input) {
    var moveScore, newWords, oldGrid, _ref2, _ref3, _ref4, _ref5;
    try {
      if (newMove) {
        _ref2 = validateInput(input), x1 = _ref2.x, y1 = _ref2.y;
        console.log("First tile: " + grid[x1][y1] + " (" + x1 + ", " + y1 + ")");
        console.log("Please choose second tile to swap with this one:");
        return newMove = false;
      } else {
        _ref3 = validateInput(input), x2 = _ref3.x, y2 = _ref3.y;
        console.log("Second tile: " + grid[x2][y2] + " (" + x2 + ", " + y2 + ")");
        console.log("Swapping (" + x1 + ", " + y1 + ") with (" + y2 + ", " + y2 + ")..");
        oldGrid = JSON.parse(JSON.stringify(grid));
        x1--;
        x2--;
        y1--;
        y2--;
        _ref4 = [grid[x2][y2], grid[x1][y1]], grid[x1][y1] = _ref4[0], grid[x2][y2] = _ref4[1];
        _ref5 = scoreMove(oldGrid, grid), moveScore = _ref5.moveScore, newWords = _ref5.newWords;
        score += moveScore;
        if (newWords.length !== 0) {
          console.log("You formed the following word(s):");
          console.log(newWords.join(', '));
        }
        moveCount++;
        console.log("Your score after " + moveCount + " moves: " + score);
        printGrid();
        console.log("Please choose a tile in the form (x, y):");
        return newMove = true;
      }
    } catch (e) {
      return console.log(e);
    }
  });

}).call(this);
