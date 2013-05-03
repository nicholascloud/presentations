'use strict';
var sio = require('socket.io'),
  bus = require('./bus');

var sockets = [];

function onWinnerChosen(winner) {
  sockets.forEach(function (s) {
    s.emit('winner', {winner: winner});
  });
}

function onRaffleError(err) {
  sockets.forEach(function (s) {
    s.emit('error', err);
  });
}

module.exports = function (server) {

  var io = sio.listen(server);
  io.sockets.on('connection', function (socket) {
    socket.emit('connected', {});
    sockets.push(socket);
  });

  bus.raffle.subscribe({
    topic: 'winner.chosen',
    callback: onWinnerChosen
  });

  bus.error.subscribe({
    topic: 'raffle.aborted',
    callback: onRaffleError
  });
};