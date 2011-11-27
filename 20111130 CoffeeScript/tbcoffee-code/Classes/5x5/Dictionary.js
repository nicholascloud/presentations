(function() {
  var Dictionary, root,
    __hasProp = Object.prototype.hasOwnProperty,
    __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (__hasProp.call(this, i) && this[i] === item) return i; } return -1; };

  Dictionary = (function() {

    function Dictionary(originalWordList, grid) {
      this.originalWordList = originalWordList;
      if (grid != null) this.setGrid(grid);
    }

    Dictionary.prototype.setGrid = function(grid) {
      var w, word, x, y, _ref, _results;
      this.grid = grid;
      this.wordList = this.originalWordList.slice(0);
      this.wordList = (function() {
        var _i, _len, _ref, _results;
        _ref = this.wordList;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          word = _ref[_i];
          if (word.length <= this.grid.size) _results.push(word);
        }
        return _results;
      }).call(this);
      this.minWordLength = Math.min.apply(Math, (function() {
        var _i, _len, _ref, _results;
        _ref = this.wordList;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          w = _ref[_i];
          _results.push(w.length);
        }
        return _results;
      }).call(this));
      this.usedWords = [];
      _results = [];
      for (x = 0, _ref = this.grid.size; 0 <= _ref ? x < _ref : x > _ref; 0 <= _ref ? x++ : x--) {
        _results.push((function() {
          var _ref2, _results2;
          _results2 = [];
          for (y = 0, _ref2 = this.grid.size; 0 <= _ref2 ? y < _ref2 : y > _ref2; 0 <= _ref2 ? y++ : y--) {
            _results2.push((function() {
              var _i, _len, _ref3, _results3;
              _ref3 = this.wordsThroughTile(x, y);
              _results3 = [];
              for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
                word = _ref3[_i];
                _results3.push(this.markUsed(word));
              }
              return _results3;
            }).call(this));
          }
          return _results2;
        }).call(this));
      }
      return _results;
    };

    Dictionary.prototype.markUsed = function(str) {
      if (__indexOf.call(this.usedWords, str) >= 0) {
        return false;
      } else {
        this.usedWords.push(str);
        return true;
      }
    };

    Dictionary.prototype.isWord = function(str) {
      return __indexOf.call(this.wordList, str) >= 0;
    };

    Dictionary.prototype.isNewWord = function(str) {
      return __indexOf.call(this.wordList, str) >= 0 && __indexOf.call(this.usedWords, str) < 0;
    };

    Dictionary.prototype.wordsThroughTile = function(x, y) {
      var addTiles, grid, length, offset, range, str, strings, _i, _len, _ref, _ref2, _results;
      grid = this.grid;
      strings = [];
      for (length = _ref = this.minWordLength, _ref2 = grid.size; _ref <= _ref2 ? length <= _ref2 : length >= _ref2; _ref <= _ref2 ? length++ : length--) {
        range = length - 1;
        addTiles = function(func) {
          var i;
          return strings.push(((function() {
            var _results;
            _results = [];
            for (i = 0; 0 <= range ? i <= range : i >= range; 0 <= range ? i++ : i--) {
              _results.push(func(i));
            }
            return _results;
          })()).join(''));
        };
        for (offset = 0; 0 <= length ? offset < length : offset > length; 0 <= length ? offset++ : offset--) {
          if (grid.inRange(x - offset, y) && grid.inRange(x - offset + range, y)) {
            addTiles(function(i) {
              return grid.tiles[x - offset + i][y];
            });
          }
          if (grid.inRange(x, y - offset) && grid.inRange(x, y - offset + range)) {
            addTiles(function(i) {
              return grid.tiles[x][y - offset + i];
            });
          }
          if (grid.inRange(x - offset, y - offset) && grid.inRange(x - offset + range, y - offset + range)) {
            addTiles(function(i) {
              return grid.tiles[x - offset + i][y - offset + i];
            });
          }
          if (grid.inRange(x - offset, y + offset) && grid.inRange(x - offset + range, y + offset - range)) {
            addTiles(function(i) {
              return grid.tiles[x - offset + i][y + offset - i];
            });
          }
        }
      }
      _results = [];
      for (_i = 0, _len = strings.length; _i < _len; _i++) {
        str = strings[_i];
        if (this.isWord(str)) _results.push(str);
      }
      return _results;
    };

    return Dictionary;

  })();

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Dictionary = Dictionary;

}).call(this);
