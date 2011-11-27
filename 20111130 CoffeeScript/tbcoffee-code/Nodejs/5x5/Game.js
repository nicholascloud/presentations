(function() {
  var Dictionary, Game, Grid, OWL2, Player, root;

  Dictionary = require('./Dictionary').Dictionary;

  Grid = require('./Grid').Grid;

  OWL2 = require('./OWL2').OWL2;

  Player = require('./Player').Player;

  Game = (function() {

    function Game() {
      this.grid = new Grid;
      this.dictionary = new Dictionary(OWL2, this.grid);
      this.currPlayer = this.player1 = new Player(1, 'Player 1', this.dictionary);
      this.player2 = new Player(2, 'Player 2', this.dictionary);
      this.player1.id = this.player2.id = null;
    }

    Game.prototype.addPlayer = function(sessionId) {
      if (!this.player1.id) {
        return this.player1.id = sessionId;
      } else {
        return this.player2.id = sessionId;
      }
    };

    Game.prototype.removePlayer = function(sessionId) {
      return this.playerWithId(sessionId).id = null;
    };

    Game.prototype.isOpen = function() {
      return !this.isFull();
    };

    Game.prototype.isFull = function() {
      if (this.player1.id && this.player2.id) {
        return true;
      } else {
        return false;
      }
    };

    Game.prototype.playerWithId = function(sessionId) {
      if (sessionId === this.player1.id) {
        return this.player1;
      } else if (sessionId === this.player2.id) {
        return this.player2;
      }
    };

    Game.prototype.otherPlayer = function(sessionId) {
      if (sessionId === this.player2.id) {
        return this.player1;
      } else if (sessionId === this.player1.id) {
        return this.player2;
      }
    };

    Game.prototype.endTurn = function() {
      if (this.currPlayer === this.player1) {
        return this.currPlayer = this.player2;
      } else {
        return this.currPlayer = this.player1;
      }
    };

    return Game;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Game = Game;

}).call(this);
