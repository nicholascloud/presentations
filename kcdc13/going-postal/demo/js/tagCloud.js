/*global define*/
define([
  'jquery',
  'underscore',
  'data',
  'channels',
  'template'
], function ($, _, data, channels, template) {
  'use strict';

  var tagCloud = (function () {
    var $cloud = $('#tagcloud');

    $cloud.on('click', 'a', function (e) {
      var category = $(this).attr('data-category');
      channels.categories.publish({
        topic: 'categories.changed',
        data: [category]
      });
      return false;
    });

    var _fill = function () {
      data.categories.all().forEach(function (c) {
        var tmpl = new template.Category(c);
        tmpl.appendTo($cloud);
      });
    };

    var _highlight = function (categories) {
      categories = categories || [];
      if (categories.length === 0) {
        $cloud.find('a').removeClass('current');
        return;
      }
      $cloud.find('a').each(function () {
        var $a = $(this);
        var isCurrent = _.contains(categories, $a.html());
        if (isCurrent) {
          $a.addClass('current');
        } else {
          $a.removeClass('current');
        }
      });
    };

    return {
      fill: _fill,
      highlight: _highlight
    };

  }());

  channels.global.subscribe({
    topic: 'ready',
    callback: tagCloud.fill
  }).withContext(tagCloud);

  channels.categories.subscribe({
    topic: 'categories.changed',
    callback: tagCloud.highlight
  }).withContext(tagCloud);

  channels.categories.subscribe({
    topic: 'categories.searched',
    callback: tagCloud.highlight
  }).withContext(tagCloud);

  return tagCloud;
});