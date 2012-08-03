/*global define:true*/

define(['jquery', 'data', 'postal', 'template'],
  function ($, data, bus, template) {

  var tagCloud = (function (selector) {
    var $cloud = $(selector);

    $cloud.on('click', 'a', function (evt) {
      var category = $(this).attr('data-category');

      // publishes a "categories.changed" message whenever one or more
      // category has been selected
      bus.channel('learnyou', 'categories.changed').publish([category]);
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

  // subscribes to a message which is generated when the whole
  // page has loaded and highlights an initial category for the user
  bus.channel('learnyou', 'ready').subscribe(function () {
    tagCloud.fill();
  });

  // subscribes to a "categories.changed" message generated by itself;
  // highlights the categories that have been selected
  bus.channel('learnyou', 'categories.changed').subscribe(function (categories) {
    tagCloud.highlight(categories);
  });

  // subscribes to a "search.categories" message generated by the search
  // module; highlights categories that match search results
  bus.channel('learnyou', 'search.categories').subscribe(function (categories) {
    tagCloud.highlight(categories);
  });

  return tagCloud;
});