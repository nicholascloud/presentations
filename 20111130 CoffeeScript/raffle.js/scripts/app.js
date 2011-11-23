(function() {
  var Participant, Prize;

  Participant = (function() {

    function Participant() {}

    Participant.prototype.name = function(name) {
      return this.name = name;
    };

    return Participant;

  })();

  Prize = (function() {

    function Prize() {}

    Prize.prototype.description = function(description) {
      return this.description = description;
    };

    return Prize;

  })();

}).call(this);
