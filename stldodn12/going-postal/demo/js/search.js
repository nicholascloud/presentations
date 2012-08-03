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

      // publishes a "search.categories" message when categories on
      // the page should change to match search results
      bus.channel('search.categories').publish(result.categories);

      // publishes a "search.offers" message when offers on the page
      // should change to match search results
      bus.channel('search.offers').publish(result.offers);
    };

    return {
      query: _query
    }

  }('#search'));

  return search;
});