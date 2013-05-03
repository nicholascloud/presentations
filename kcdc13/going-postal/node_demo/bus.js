'use strict';
var _ = require('underscore'),
  postal = require('postal')(_);

module.exports = {
  raffle: postal.channel('raffle'),
  error: postal.channel('error')
};