/*global define:true*/

define(['jquery', 'postal', 'data'],
  function ($, bus, data) {

  var search = (function (selector) {
    var $form = $(selector).find('form');

    $form.find('.submit').on('click', function (evt) {
      $form.submit();
      return false;
    });

    $form.on('submit', function (evt) {
      var terms = $form.find('#terms').val();
      _query(terms);
      return false;
    });

    var _query = function (terms) {
      var result = data.offers.search(terms);
      if (result.count === 0) {
        //show some message
      }
      bus.publish('search.categories', result.categories)
      bus.publish('search.offers', result.offers);
    };

    return {
      query: _query
    }

  }('#search'));

  return search;
});