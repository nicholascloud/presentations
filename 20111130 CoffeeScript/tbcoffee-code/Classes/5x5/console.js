(function() {
  var Dictionary, Grid, OWL2, Player, currPlayer, dictionary, grid, inputCallback, isInteger, newGame, player1, player2, printGrid, promptForTile1, promptForTile2, stdin, strToCoordinates;

  Dictionary = require('./Dictionary').Dictionary;

  Grid = require('./Grid').Grid;

  Player = require('./Player').Player;

  OWL2 = require('./OWL2').OWL2;

  grid = dictionary = currPlayer = player1 = player2 = null;

  inputCallback = null;

  stdin = process.openStdin();

  stdin.setEncoding('utf8');

  stdin.on('data', function(input) {
    return inputCallback(input);
  });

  newGame = function() {
    grid = new Grid;
    dictionary = new Dictionary(OWL2, grid);
    currPlayer = player1 = new Player('Player 1', dictionary);
    player2 = new Player('Player 2', dictionary);
    console.log("Welcome to 5x5!");
    if (dictionary.usedWords.length !== 0) {
      console.log("Initially used words:\n" + (dictionary.usedWords.join(', ')) + "\n");
    }
    return promptForTile1();
  };

  printGrid = function() {
    var i, row, rowSeparator, rowStrings, rows;
    rows = grid.rows();
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
      for (i = 1, _ref = grid.size * 4; 1 <= _ref ? i < _ref : i > _ref; 1 <= _ref ? i++ : i--) {
        _results.push('-');
      }
      return _results;
    })()).join('');
    return console.log('\n' + rowStrings.join("\n" + rowSeparator + "\n") + '\n');
  };

  promptForTile1 = function() {
    printGrid();
    console.log("" + currPlayer + ", please enter coordinates for the first tile.");
    return inputCallback = function(input) {
      var x, y, _ref;
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
    console.log("" + currPlayer + ", please enter coordinates for the second tile.");
    return inputCallback = function(input) {
      var moveScore, newWords, x2, y2, _ref, _ref2;
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
        _ref2 = currPlayer.makeMove({
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        }), moveScore = _ref2.moveScore, newWords = _ref2.newWords;
        if (moveScore !== 0) {
          console.log("" + currPlayer + " formed the following " + newWords.length + " word(s)\n" + (newWords.join(', ')) + "\nearning " + (moveScore / newWords.length) + "x" + newWords.length + " = " + moveScore + " points");
        }
        console.log("" + currPlayer + "'s score after " + currPlayer.moveCount + " moves: " + currPlayer.score);
        currPlayer = currPlayer === player1 ? player2 : player1;
        return promptForTile1();
      }
    };
  };

  isInteger = function(num) {
    return num === Math.round(num);
  };

  strToCoordinates = function(input) {
    var halves, x, y;
    halves = input.split(',');
    if (halves.length === 2) {
      x = parseFloat(halves[0]);
      y = parseFloat(halves[1]);
      if (!isInteger(x) || !isInteger(y)) {
        throw "Each coordinate must be an integer.";
      } else if (!grid.inRange(x - 1, y - 1)) {
        throw "Each coordinate must be between 1 and " + grid.size + ".";
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

  newGame();

}).call(this);
