(function() {
  var bar, baz, foo;

  foo = function() {
    return console.log(Array.prototype.slice.call(arguments).join(' and ') + '!');
  };

  bar = 'Curiouser';

  baz = 'curiouser';

  foo(bar, baz);

}).call(this);
