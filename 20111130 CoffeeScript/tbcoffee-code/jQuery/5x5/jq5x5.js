(function() {
  var currPlayer, dictionary, doMove, drawTiles, endTurn, grid, newGame, player1, player2, selectTile, selectedCoordinates, showMessage, showThenFade, tileClick;

  grid = dictionary = currPlayer = player1 = player2 = selectedCoordinates = null;

  newGame = function() {
    var player, _i, _len, _ref;
    grid = new Grid;
    dictionary = new Dictionary(OWL2, grid);
    currPlayer = player1 = new Player('Player 1', dictionary);
    player2 = new Player('Player 2', dictionary);
    drawTiles();
    player1.num = 1;
    player2.num = 2;
    _ref = [player1, player2];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      player = _ref[_i];
      $("#p" + player.num + "name").html(player.name);
      $("#p" + player.num + "score").html(0);
    }
    return showMessage('firstTile');
  };

  drawTiles = function() {
    var gridHtml, x, y, _ref, _ref2;
    gridHtml = '';
    for (y = 0, _ref = grid.tiles.length; 0 <= _ref ? y < _ref : y > _ref; 0 <= _ref ? y++ : y--) {
      gridHtml += '<ul>';
      for (x = 0, _ref2 = grid.tiles.length; 0 <= _ref2 ? x < _ref2 : x > _ref2; 0 <= _ref2 ? x++ : x--) {
        gridHtml += "<li id='tile" + x + "_" + y + "'>" + grid.tiles[x][y] + "</li>";
      }
      gridHtml += '</ul>';
    }
    return $('#grid').html(gridHtml);
  };

  showMessage = function(messageType) {
    var messageHtml;
    switch (messageType) {
      case 'firstTile':
        messageHtml = "Please select your first tile.";
        break;
      case 'secondTile':
        messageHtml = "Please select a second tile.";
    }
    return $('#message').html(messageHtml);
  };

  tileClick = function() {
    var $tile, x, y, _ref;
    $tile = $(this);
    if ($tile.hasClass('selected')) {
      selectedCoordinates = null;
      $tile.removeClass('selected');
      return showMessage('firstTile');
    } else {
      $tile.addClass('selected');
      _ref = this.id.match(/(\d+)_(\d+)/).slice(1), x = _ref[0], y = _ref[1];
      return selectTile(x, y);
    }
  };

  selectTile = function(x, y) {
    if (selectedCoordinates === null) {
      selectedCoordinates = {
        x1: x,
        y1: y
      };
      return showMessage('secondTile');
    } else {
      selectedCoordinates.x2 = x;
      selectedCoordinates.y2 = y;
      $('#grid li').removeClass('selected');
      return doMove();
    }
  };

  doMove = function() {
    var $notice, moveScore, newWords, _ref;
    _ref = currPlayer.makeMove(selectedCoordinates), moveScore = _ref.moveScore, newWords = _ref.newWords;
    if (moveScore === 0) {
      $notice = $("" + currPlayer.name + " formed no words this turn.");
    } else {
      $notice = $("<p class=\"notice\">\n  " + currPlayer + " formed the following " + newWords.length + " word(s):<br />\n  <b>" + (newWords.join(', ')) + "</b><br />\n  earning <b>" + (moveScore / newWords.length) + "x" + newWords.length + " =\n  " + moveScore + "</b> points!\n</p>");
    }
    showThenFade($notice);
    return endTurn();
  };

  endTurn = function() {
    showMessage('firstTile');
    drawTiles();
    selectedCoordinates = null;
    $("#p" + currPlayer.num + "score").html(currPlayer.score);
    return currPlayer = currPlayer === player1 ? player2 : player1;
  };

  showThenFade = function($elem) {
    var animationTarget;
    $elem.insertAfter($('#grid'));
    animationTarget = {
      opacity: 0,
      height: 0,
      padding: 0
    };
    return $elem.delay(5000).animate(animationTarget, 500, function() {
      return $elem.remove();
    });
  };

  $(document).ready(function() {
    newGame();
    return $('#grid li').live('click', tileClick);
  });

}).call(this);
