function random(min, max) {
  if (arguments.length === 0) {
    return Math.random();
  }
  min = min || Number.MIN_VALUE;
  max = max || Number.MAX_VALUE;

  //http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = random;