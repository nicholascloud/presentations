(function() {
  var Tribble, tribble1, tribble2;

  Tribble = (function() {

    function Tribble() {
      this.isAlive = true;
      Tribble.count++;
    }

    Tribble.prototype.breed = function() {
      if (this.isAlive) return new Tribble;
    };

    Tribble.prototype.die = function() {
      if (this.isAlive) Tribble.count--;
      return this.isAlive = false;
    };

    Tribble.count = 0;

    Tribble.makeTrouble = function() {
      var i;
      return console.log(((function() {
        var _ref, _results;
        _results = [];
        for (i = 1, _ref = this.count; 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
          _results.push('Trouble!');
        }
        return _results;
      }).call(this)).join(' '));
    };

    return Tribble;

  })();

  tribble1 = new Tribble;

  tribble2 = new Tribble;

  Tribble.makeTrouble();

  tribble1.die();

  Tribble.makeTrouble();

  tribble2.breed().breed().breed();

  Tribble.makeTrouble();

}).call(this);
