/*global define:true*/

define(['jquery'], function ($) {

  function CategoryTemplate(category) {
    var $a = $('<a href="#"></a>')
      .attr('data-category', category)
      .html(category);

    this.appendTo = function ($element) {
      $element.append($a);
    };
  }

  function OfferTemplate(offer) {
    var $span = $('<span></span>');
    $span.attr('data-id', offer.id);

    var $frame = $('<div class="frame"></div>');
    var $img = $('<img />');
    $img.attr('src', 'img/' + offer.pic);
    $img.attr('alt', offer.name);
    $frame.append($img);
    $span.append($frame);

    var $a = $('<a href="#"></a>')
      .html(offer.name);
    $span.append($a);

    var $p = $('<p></p>').html(offer.description);
    $span.append($p);

    this.setVisibility = function (visible) {
      if (visible) {
        $span.removeClass('invisible');
      } else {
        $span.addClass('invisible');
      }
    };

    this.appendTo = function ($element) {
      $element.append($span);
    };
  };

  return {
    Offer: OfferTemplate,
    Category: CategoryTemplate
  };
});