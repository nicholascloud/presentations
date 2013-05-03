/*global jQuery, io*/
'use strict';
(function ($, io) {
  /**
   * Copy&Pasters beware! BAD CODE AHEAD!
   */
  var socket = io.connect('http://localhost:1981');

  function showNotice() {
    $('#notice').removeClass('invisible');
  }

  function hideNotice() {
    $('#notice').addClass('invisible');
  }

  function removeFromContestants(winner) {
    var $contestantNames = $('#contestant-names');
    var contestants = $contestantNames.val().split(',');
    contestants = _.map(contestants, function (c) {
      return c.trim();
    });
    contestants = _.without(contestants, winner);
    $contestantNames.val(contestants.join(', '));
  }

  function addToWinnerList(winner) {
    var textArea = $('#winner textarea');
    textArea.text(textArea.text() + winner + '\n');
  }

  function chooseWinner(contestants) {
    $.ajax('/raffle', {
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({contestants: contestants})
    }).done(function () {
      console.log('contestants sent...');
    }).fail(function () {
      alert('error communicating with server');
    });
  }

  $('#submit-contestants').on('click', function (/*e*/) {
    showNotice();
    var contestants = $('#contestant-names').val();
    chooseWinner(contestants);
  });

  socket.on('winner', function (data) {
    hideNotice();
    var winner = data.winner.trim();

    addToWinnerList(winner);
    removeFromContestants(winner);
  });

  socket.on('error', function (err) {
    hideNotice();
    alert(err);
  });

}(jQuery, io));