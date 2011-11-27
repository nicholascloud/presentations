(function() {
  var GRID_SIZE, inRange, inputCallback, isInteger, promptForTile1, promptForTile2, stdin, strToCoordinates;

  stdin = process.openStdin();

  stdin.setEncoding('utf8');

  inputCallback = null;

  stdin.on('data', function(input) {
    return inputCallback(input);
  });

  promptForTile1 = function() {
    console.log("Please enter coordinates for the first tile.");
    return inputCallback = function(input) {
      if (strToCoordinates(input)) return promptForTile2();
    };
  };

  promptForTile2 = function() {
    console.log("Please enter coordinates for the second tile.");
    return inputCallback = function(input) {
      if (strToCoordinates(input)) {
        console.log("Swapping tiles...done!");
        return promptForTile1();
      }
    };
  };

  GRID_SIZE = 5;

  inRange = function(x, y) {
    return (0 <= x && x < GRID_SIZE) && (0 <= y && y < GRID_SIZE);
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
        return console.log("Each coordinate must be an integer.");
      } else if (!inRange(x - 1, y - 1)) {
        return console.log("Each coordinate must be between 1 and " + GRID_SIZE + ".");
      } else {
        return {
          x: x,
          y: y
        };
      }
    } else {
      return console.log('Input must be of the form `x, y`.');
    }
  };

  console.log("Welcome to 5x5!");

  promptForTile1();

}).call(this);
