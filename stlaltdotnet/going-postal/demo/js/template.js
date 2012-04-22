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
    var $span = $('<span class="offer"></span>')
      .attr('data-id', offer.id);

    var $close = $('<span class="close glyph">X</span>');
    $span.append($close);

    var $frame = $('<div class="frame"></div>');
    var $img = $('<img />')
      .attr('src', 'img/' + offer.pic)
      .attr('alt', offer.name);
    $frame.append($img);
    $span.append($frame);

    var $label = $('<label></label>')
      .html(offer.name);
    $span.append($label);

    var $title = $('<p class="title"></p>')
      .html(offer.title);
    $span.append($title);

    var $learnu = $('<a href="#" class="learnyou">LEARNyou</a>');
    $title.append($learnu);

    var $desc = $('<p class="description"></p>')
      .html(offer.description);
    $span.append($desc);

    var $cost = $('<p class="cost"></p>');
    var $costLabel = $('<label>Cost</label>');
    $cost.append($costLabel);
    $cost.append('$'+ offer.cost);
    $span.append($cost);

    this.appendTo = function ($element) {
      $element.append($span);
    };
  };

  return {
    Offer: OfferTemplate,
    Category: CategoryTemplate
  };
});