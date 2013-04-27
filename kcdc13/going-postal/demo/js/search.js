/*global define*/
define([
  'jquery',
  'channels',
  'data'
], function ($, channels, data) {
  'use strict';

  var search = (function () {
    var $form = $('#search').find('form');

    $form.find('.submit').on('click', function (e) {
      $form.submit();
      return false;
    });

    $form.on('submit', function (e) {
      var terms = $form.find('#terms').val();
      _query(terms);
      return false;
    });

    var _query = function (terms) {
      var result = data.offers.search(terms);
      channels.categories.publish({
        topic: 'categories.searched',
        data: result.categories
      });
      channels.categories.publish({
        topic: 'offers.searched',
        data: result.offers
      });
    };

    return {
      query: _query
    };
  }());

  return search;
});