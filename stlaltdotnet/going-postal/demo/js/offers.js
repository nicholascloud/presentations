/*global define:true*/

define(['jquery', 'postal', 'data', 'template', 'jqueryext'],
  function ($, bus, data, template) {

  var offerUI = (function (selector) {
    var _this = this;
    var $offers = $(selector);
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
      render: _render,
    };
  }('#offers'));

  bus.subscribe('categories.changed', function (categories) {
    offerUI.clear();
    offerUI.load(categories);
  });

  bus.subscribe('search.offers', function (offers) {
    offerUI.clear();
    offerUI.render(offers);
  });

  return offerUI;
});