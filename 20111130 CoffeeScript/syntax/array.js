(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (__hasProp.call(this, i) && this[i] === item) return i; } return -1; };

  window.syntax = window.syntax || {};

  window.syntax.array = function() {
    /*
        Arrays
    */
    var a, i, lang, r, _i, _j, _k, _len, _len2, _len3, _ref, _ref2, _results, _step;
    console.title('array');
    a = [1, 2, 3, 4, 5];
    console.log(a);
    console.title('array index');
    a = [1, 2, 3, 4, 5];
    i = a[1];
    console.log(i);
    console.title('testing for value in array');
    a = [1, 2, 3, 4, 5];
    if (__indexOf.call(a, 5) >= 0) console.log('true');
    /*
        Ranges
    */
    console.title('range, inclusive');
    r = [1, 2, 3, 4, 5];
    console.log(r);
    console.title('range, exclusive');
    r = [1, 2, 3, 4];
    console.log(r);
    console.title('reversed range, inclusive');
    r = [5, 4, 3, 2, 1];
    console.log(r);
    console.title('reversed range, exclusive');
    r = [5, 4, 3, 2];
    console.log(r);
    /*
        Slicing
    */
    console.title('slicing with index and length');
    a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice(1, 3);
    console.log(a);
    console.title('slicing with range, inclusive');
    a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice(1, 4);
    console.log(a);
    console.title('slicing with range, exclusive');
    a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice(1, 3);
    console.log(a);
    console.title('slicing with reversed range produces empty array');
    a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice(3, 2);
    console.log(a);
    console.title('slicing with a negative final index');
    a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice(1);
    console.log(a);
    console.title('slicing by ommmitting final index');
    a = ['Jupiter', 'Mars', 'Saturn', 'Venus', 'Mercury'].slice(1);
    console.log(a);
    /*
        Splicing
    */
    console.title('splicing by specifying a range for replacement');
    a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure'];
    [].splice.apply(a, [2, 3].concat(_ref = ['Ruby'])), _ref;
    console.log(a);
    console.title('splice the rest of the array by removing the final index');
    a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure'];
    [].splice.apply(a, [2, 9e9].concat(_ref2 = ['Ruby', 'JavaScript'])), _ref2;
    console.log(a);
    /*
        Iteration
    */
    console.title('iterating over an array');
    a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure'];
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      lang = a[_i];
      console.log(lang);
    }
    console.title('iterating over an array conditionally');
    a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure'];
    for (_j = 0, _len2 = a.length; _j < _len2; _j++) {
      lang = a[_j];
      if (lang[0] === 'P') console.log(lang);
    }
    console.title('iterating over an array with step value');
    a = ['PHP', 'C#', 'Python', 'CoffeeScript', 'Perl', 'Clojure'];
    _results = [];
    for (_k = 0, _len3 = a.length, _step = 2; _k < _len3; _k += _step) {
      lang = a[_k];
      _results.push(console.log(lang));
    }
    return _results;
  };

}).call(this);
