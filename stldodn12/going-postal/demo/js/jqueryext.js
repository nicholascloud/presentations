/*global define:true*/

define(['jquery'], function ($) {
  $.fn.take = function (howMany) {
    if (!howMany) return this;
    if (howMany > this.length) return this;
    var arr = $.makeArray(this);
    return $(arr.slice(0, howMany));
  };

  $.fn.skip = function (howMany) {
    if (howMany > this.length) return $([]);
    var arr = $.makeArray(this);
    return $(arr.slice(howMany));
  };

  $.fn.swapClass = function (toRemove, toAdd) {
    return this.removeClass(toRemove)
      .addClass(toAdd);
  };

  return $;
});