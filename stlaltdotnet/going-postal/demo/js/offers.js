/*global define:true*/

define(['jquery', 'postal', 'data', 'template'],
  function ($, bus, data, template) {

  var offerUI = (function (selector) {
    var _this = this;
    var $offers = $(selector);
    var $viewing = $offers.find('#viewing');
    var $moar = $offers.find('#moar');

    var _clear = function () {
      $viewing.find('*').remove();
    };

    var _showMore = function () {
      $offers.find('.invisible')
        .removeClass('invisible');
    };

    var _load = function (categories) {
      var offers = data.offers.inCategories(categories);
      _render(offers);
    };

    var _render = function (offers) {
      offers.forEach(function (offer, i) {
        var isVisible = (i < 3);
        var tmpl = new template.Offer(offer);
        tmpl.setVisibility(isVisible);
        tmpl.appendTo($viewing);
      });
      $moar.toggle(offers.length > 3);
      $offers.find('span').addClass('fadein');
    };

    $offers.find('#moar').on('click', function (evt) {
      _showMore();
      $(this).hide();
    });

    return {
      clear: _clear,
      load: _load,
      render: _render,
      showMore: _showMore
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