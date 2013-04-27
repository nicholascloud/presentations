/*global define*/
define([
  'jquery',
  'channels',
  'data',
  'template'
], function ($, channels, data, template) {
  'use strict';

  var offerUI = (function () {
    var $offers = $('#offers');
    var $viewing = $offers.find('#viewing');

    var _clear = function () {
      $viewing.find('> span').remove();
    };

    var _load = function (categories) {
      var offers = data.offers.inCategories(categories);
      _render(offers);
    };

    var _render = function (offers) {
      offers.forEach(function (offer, i) {
        var tmpl = new template.Offer(offer);
        tmpl.appendTo($viewing);
      });
      setTimeout(function () {
        $viewing.find('span')
          .addClass('show');
      }, 10);
    };

    $viewing.on('click', '.learnyou', function () {
      $viewing.find('> .offer')
        .removeClass('extended')
        .swapClass('show', 'obscured');
      $(this).closest('span')
        .swapClass('obscured', 'extended');
      return false;
    });

    $viewing.on('click', '.close', function () {
      $(this).closest('.offer')
        .removeClass('extended');
      $viewing.find('> span')
        .swapClass('obscured', 'show');
      return false;
    });

    return {
      clear: _clear,
      load: _load,
      render: _render
    };
  }());

  channels.categories.subscribe({
    topic: 'categories.changed',
    callback: function (categories) {
      offerUI.clear();
      offerUI.load(categories);
    }
  });

  channels.categories.subscribe({
    topic: 'offers.searched',
    callback: function (offers) {
      offerUI.clear();
      offerUI.render(offers);
    }
  });

  return offerUI;
});