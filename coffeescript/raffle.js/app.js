(function() {
  var Banner, ElementList, Participant, ParticipantList, Prize, PrizeList, Randomizer,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    var banner, participantList, prizeList, raffle;
    raffle = window.raffle;
    banner = new Banner();
    participantList = new ParticipantList(raffle.participants);
    prizeList = new PrizeList(raffle.prizes);
    participantList.populate();
    prizeList.populate();
    return $('#roll').click(function() {
      var randomizer, winner;
      randomizer = new Randomizer(participantList.names);
      winner = randomizer.pick();
      banner.setWinner(winner);
      banner.show();
      participantList.remove(winner);
      participantList.populate();
      return prizeList.populate();
    });
  });

  /*
    Classes
  */

  /*
  Element List
  */

  window.ElementList = ElementList = (function() {

    function ElementList(selector) {
      this.list = $(selector);
    }

    ElementList.prototype.append = function(item) {
      return this.list.append(item);
    };

    ElementList.prototype.purge = function() {
      return this.list.find('.clearfix').remove();
    };

    return ElementList;

  })();

  /*
  Participant List
  */

  window.ParticipantList = ParticipantList = (function() {

    __extends(ParticipantList, ElementList);

    function ParticipantList(names) {
      this.names = names;
      ParticipantList.__super__.constructor.call(this, '#participant_list');
    }

    ParticipantList.prototype.populate = function() {
      var name, participant, participants, _i, _len, _results;
      this.purge();
      participants = (function() {
        var _i, _len, _ref, _results;
        _ref = this.names;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          _results.push(new Participant(name));
        }
        return _results;
      }).call(this);
      _results = [];
      for (_i = 0, _len = participants.length; _i < _len; _i++) {
        participant = participants[_i];
        _results.push(this.append(participant.toElement()));
      }
      return _results;
    };

    ParticipantList.prototype.remove = function(winnerName) {
      var name;
      return this.names = (function() {
        var _i, _len, _ref, _results;
        _ref = this.names;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          if (name !== winnerName) _results.push(name);
        }
        return _results;
      }).call(this);
    };

    return ParticipantList;

  })();

  /*
  Prize List
  */

  window.PrizeList = PrizeList = (function() {
    var claimPrize;

    __extends(PrizeList, ElementList);

    function PrizeList(prizeNames) {
      this.prizeNames = prizeNames;
      PrizeList.__super__.constructor.call(this, '#prize_list');
    }

    claimPrize = function(_this, claimed) {
      var prize;
      return _this.prizeNames = (function() {
        var _i, _len, _ref, _results;
        _ref = _this.prizeNames;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          prize = _ref[_i];
          if (prize !== claimed) _results.push(prize);
        }
        return _results;
      })();
    };

    PrizeList.prototype.populate = function() {
      var name, prize, prizes, _i, _len, _results, _this;
      this.purge();
      _this = this;
      prizes = (function() {
        var _i, _len, _ref, _results;
        _ref = this.prizeNames;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          _results.push(new Prize(name));
        }
        return _results;
      }).call(this);
      _results = [];
      for (_i = 0, _len = prizes.length; _i < _len; _i++) {
        prize = prizes[_i];
        prize.prizeSelected(function(claimed) {
          return claimPrize(_this, claimed);
        });
        _results.push(this.append(prize.toElement()));
      }
      return _results;
    };

    return PrizeList;

  })();

  /*
  Participant
  */

  window.Participant = Participant = (function() {

    function Participant(name) {
      this.name = name;
      this.number = ++Participant.count;
    }

    Participant.count = 0;

    Participant.prototype.toElement = function() {
      var $clearfix, $input, $label, $text;
      $clearfix = $('<div class="clearfix"></div>');
      $label = $("<label for=\"participant_" + this.number + "\">Participant</label>");
      $clearfix.append($label);
      $input = $('<div class="input"></div>');
      $clearfix.append($input);
      $text = $("<input type=\"text\" value=\"" + this.name + "\" id=\"participant_" + this.number + "\" class=\"span3\" />");
      $input.append($text);
      return $clearfix;
      /*
          <div class="clearfix">
            <label for="participant_#{@number}">Participant</label>
            <div class="input">
              <input type="text" value="#{@name}" id="participant_#{@number}" class="span3" />
            </div>
          </div>
      */
    };

    return Participant;

  })();

  /*
  Prize
  */

  window.Prize = Prize = (function() {

    function Prize(name) {
      this.name = name;
      this.number = ++Prize.count;
      this.onPrizeSelected = null;
    }

    Prize.count = 0;

    Prize.prototype.prizeSelected = function(callback) {
      return this.onPrizeSelected = callback;
    };

    Prize.prototype.toElement = function() {
      var $button, $clearfix, $input, $label, $text, _this;
      _this = this;
      $clearfix = $('<div class="clearfix"></div>');
      $label = $("<label for=\"prize_" + this.number + "\">Prize</label>");
      $clearfix.append($label);
      $input = $('<div class="input"></div>');
      $clearfix.append($input);
      $text = $("<input type=\"text\" value=\"" + this.name + "\" id=\"prize_" + this.number + "\" class=\"span3\" />");
      $button = $('<input type="button" value="$$$" class="btn" />').click(function() {
        var $me, prize;
        $me = $(this);
        $me.closest('.clearfix').remove();
        prize = $me.siblings('input[type=text]').val();
        if (_this.onPrizeSelected) return _this.onPrizeSelected(prize);
      });
      $input.append($text);
      $input.append($button);
      return $clearfix;
      /*
          <div class="clearfix">
            <label for="prize_0">Prize</label>
            <div class="input">
              <input type="text" id="prize_0" class="span3" />
              <input type="button" value="$$$" class="btn" />
            </div>
          </div>
      */
    };

    return Prize;

  })();

  /*
  Randomizer
  */

  window.Randomizer = Randomizer = (function() {
    var random;

    function Randomizer(participants) {
      this.participants = participants;
    }

    random = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    Randomizer.prototype.pick = function() {
      var partNum;
      partNum = random(0, this.participants.length - 1);
      return this.participants[partNum];
    };

    return Randomizer;

  })();

  /*
  Banner
  */

  window.Banner = Banner = (function() {

    function Banner() {
      var _this;
      _this = this;
      this.banner = $('#success-banner');
      this.banner.find('.close').click(function() {
        return _this.hide();
      });
    }

    Banner.prototype.setWinner = function(name) {
      return this.banner.find('#participant-name strong').text(name);
    };

    Banner.prototype.hide = function() {
      return this.banner.hide();
    };

    Banner.prototype.show = function() {
      return this.banner.show();
    };

    return Banner;

  })();

}).call(this);
