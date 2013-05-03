'use strict';
var _ = require('underscore'),
  bus = require('./bus');

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function excludeEmptyEntries(c) {
  return c !== '';
}

function trimEntries(c) {
  return c.trim();
}

function raffle(contestants) {

  if (_.isString(contestants)) {
    contestants = contestants.split(',')
      .filter(excludeEmptyEntries);
  }

  contestants = contestants.map(trimEntries);

  var contestantCount = contestants.length;

  if (contestantCount === 0) {
    bus.error.publish({
      topic: 'raffle.aborted',
      data: 'no contestants were submitted'
    });
    return;
  }

  var firstIndex = 0;
  var lastIndex = Math.max(0, contestantCount - 1);
  var winnerIndex = randomBetween(firstIndex, lastIndex);
  var winner = contestants[winnerIndex];

  //simulate latency
  setTimeout(function () {
    bus.raffle.publish({
      topic: 'winner.chosen',
      data: winner
    });
  }, 3000);
}

bus.raffle.subscribe({
  topic: 'contestants.submitted',
  callback: raffle
});