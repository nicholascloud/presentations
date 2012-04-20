/*global define:true*/

define(['jquery', 'data', 'postal'], function ($, data, bus) {

  var tagCloud = function (selector) {
    var $cloud = $(selector);

    return {
      fill: function () {
        data.categories.all().forEach(function (c) {
          $cloud.append($('<span></span>').html(c));
        });
      }
    }
  };

  bus.subscribe('ready', function () {
    tagCloud('#tagcloud').fill();
  });
});