/*global define:true*/

define(['jquery', 'data', 'postal', 'template'],
  function ($, data, bus, template) {

  var tagCloud = (function (selector) {
    var $cloud = $(selector);

    $cloud.on('click', 'a', function (evt) {
      var category = $(this).attr('data-category');
      bus.publish('categories.changed', [category]);
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
        var isCurrent = categories.contains($a.html());
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

  }('#tagcloud'));

  bus.subscribe('ready', function () {
    tagCloud.fill();
  });

  bus.subscribe('categories.changed', function (categories) {
    tagCloud.highlight(categories);
  });

  bus.subscribe('search.categories', function (categories) {
    tagCloud.highlight(categories);
  });

  return tagCloud;
});