(function() {
  var Participant, Prize;

  jQuery(function() {
    var name, names, participant, participants, _i, _len, _results;
    names = window.raffle.participants;
    participants = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = names.length; _i < _len; _i++) {
        name = names[_i];
        _results.push(new Participant(name));
      }
      return _results;
    })();
    _results = [];
    for (_i = 0, _len = participants.length; _i < _len; _i++) {
      participant = participants[_i];
      _results.push($('#participant_list').append(participant.toElement()));
    }
    return _results;
  });

  window.Participant = Participant = (function() {

    function Participant(name) {
      this.name = name;
      this.number = ++Participant.count;
    }

    Participant.count = 0;

    Participant.prototype.toElement = function() {
      var $clearfix, $input, $label, $removeButton, $text;
      $clearfix = $('<div class="clearfix"></div>');
      $label = $("<label for=\"participant_" + this.number + "\">Participant</label>");
      $clearfix.append($label);
      $input = $('<div class="input"></div>');
      $clearfix.append($input);
      $text = $("<input type=\"text\" value=\"" + this.name + "\" id=\"participant_" + this.number + "\" class=\"span3\" />");
      $removeButton = $('<input type="button" value=" - " class="btn remove" />');
      $input.append($text);
      $input.append($removeButton);
      return $clearfix;
      /*
          <div class="clearfix">
            <label for="participant_#{@number}">Participant</label>
            <div class="input">
              <input type="text" value="#{@name}" id="participant_#{@number}" class="span3" />
              <input type="button" value=" + " class="btn add" />
              <input type="button" value=" - " class="btn remove" />
            </div>
          </div>
      */
    };

    return Participant;

  })();

  window.Prize = Prize = (function() {

    function Prize(name) {
      this.name = name;
      this.number = ++Prize.count;
    }

    Prize.count = 0;

    return Prize;

  })();

}).call(this);
