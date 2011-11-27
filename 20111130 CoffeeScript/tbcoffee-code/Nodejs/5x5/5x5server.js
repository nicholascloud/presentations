(function() {
  var Game, app, assignToGame, connect, extend, game, handleMessage, idClientMap, io, port, removeFromGame, socket, typeAndContent, welcomePlayers,
    __slice = Array.prototype.slice;

  Game = require('./Game').Game;

  game = new Game;

  idClientMap = {};

  connect = require('connect');

  app = connect.createServer(connect.compiler({
    src: __dirname + '/client',
    enable: ['coffeescript']
  }), connect.static(__dirname + '/client'), connect.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));

  port = 3000;

  app.listen(port);

  console.log("Browse to http://localhost:" + port + " to play");

  io = require('socket.io');

  socket = io.listen(app);

  socket.on('connection', function(client) {
    if (assignToGame(client)) {
      client.on('message', function(message) {
        return handleMessage(client, message);
      });
      return client.on('disconnect', function() {
        return removeFromGame(client);
      });
    } else {
      return client.send('full');
    }
  });

  assignToGame = function(client) {
    idClientMap[client.sessionId] = client;
    if (game.isFull()) return false;
    game.addPlayer(client.sessionId);
    if (game.isFull()) welcomePlayers();
    return true;
  };

  removeFromGame = function(client) {
    delete idClientMap[client.sessionId];
    return game.removePlayer(client.sessionId);
  };

  welcomePlayers = function() {
    var info, player, playerInfo, players, _i, _len, _results;
    players = [game.player1, game.player2];
    info = {
      players: players,
      tiles: game.grid.tiles,
      currPlayerNum: game.currPlayer.num
    };
    _results = [];
    for (_i = 0, _len = players.length; _i < _len; _i++) {
      player = players[_i];
      playerInfo = extend({}, info, {
        yourNum: player.num
      });
      _results.push(idClientMap[player.id].send("welcome:" + (JSON.stringify(playerInfo))));
    }
    return _results;
  };

  handleMessage = function(client, message) {
    var content, moveScore, newWords, result, swapCoordinates, type, _ref, _ref2;
    _ref = typeAndContent(message), type = _ref.type, content = _ref.content;
    if (type === 'move') {
      if (client.sessionId !== game.currPlayer.id) return;
      swapCoordinates = JSON.parse(content);
      _ref2 = game.currPlayer.makeMove(swapCoordinates), moveScore = _ref2.moveScore, newWords = _ref2.newWords;
      result = {
        swapCoordinates: swapCoordinates,
        moveScore: moveScore,
        newWords: newWords,
        player: game.currPlayer
      };
      socket.broadcast("moveResult:" + (JSON.stringify(result)));
      return game.endTurn();
    }
  };

  typeAndContent = function(message) {
    var content, ignore, type, _ref;
    _ref = message.match(/(.*?):(.*)/), ignore = _ref[0], type = _ref[1], content = _ref[2];
    return {
      type: type,
      content: content
    };
  };

  extend = function() {
    var a, key, o, others, val, _i, _len;
    a = arguments[0], others = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = others.length; _i < _len; _i++) {
      o = others[_i];
      for (key in o) {
        val = o[key];
        a[key] = val;
      }
    }
    return a;
  };

}).call(this);
