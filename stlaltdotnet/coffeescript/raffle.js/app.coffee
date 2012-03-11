jQuery ->
  raffle = window.raffle
  banner = new Banner()
  
  participantList = new ParticipantList(raffle.participants)
  prizeList = new PrizeList(raffle.prizes)
  
  participantList.populate()
  prizeList.populate()
  
  $('#roll').click ->
    randomizer = new Randomizer(participantList.names)
    winner = randomizer.pick()
    banner.setWinner(winner)
    banner.show()
    participantList.remove(winner)
    participantList.populate()
    prizeList.populate()
  
###
  Classes
###

###
Element List
###
window.ElementList = class ElementList
  constructor: (selector) ->
    @list = $(selector)

  append: (item) -> @list.append item

  purge: -> @list.find('.clearfix').remove()

###
Participant List
###
window.ParticipantList = class ParticipantList extends ElementList
  constructor: (@names) ->
    super '#participant_list'
    
  populate: ->
    @purge()
    participants = (new Participant(name) for name in @names)
    for participant in participants
      @append participant.toElement()
      
  remove: (winnerName) ->
    @names = (name for name in @names when name isnt winnerName)

###
Prize List
###
window.PrizeList = class PrizeList extends ElementList
  constructor: (@prizeNames) ->
    super '#prize_list'
  
  claimPrize = (_this, claimed) ->
    _this.prizeNames = (prize for prize in _this.prizeNames when prize isnt claimed)
  
  populate: ->
    @purge()
    _this = @
    prizes = (new Prize(name) for name in @prizeNames)
    for prize in prizes
      prize.prizeSelected((claimed) -> claimPrize(_this, claimed))
      @append prize.toElement()

###
Participant
###
window.Participant = class Participant
  constructor: (@name) ->
    @number = ++Participant.count
    
  @count = 0
    
  toElement: ->
    $clearfix = $('<div class="clearfix"></div>');
    $label = $("<label for=\"participant_#{@number}\">Participant</label>");
    $clearfix.append $label
    $input = $('<div class="input"></div>');
    $clearfix.append $input
    $text = $("<input type=\"text\" value=\"#{@name}\" id=\"participant_#{@number}\" class=\"span3\" />");
    $input.append $text

    $clearfix     
    
    ###
    <div class="clearfix">
      <label for="participant_#{@number}">Participant</label>
      <div class="input">
        <input type="text" value="#{@name}" id="participant_#{@number}" class="span3" />
      </div>
    </div>
    ###

###
Prize
###    
window.Prize = class Prize
  constructor: (@name) ->
    @number = ++Prize.count
    @onPrizeSelected = null
      
  @count = 0
  
  prizeSelected: (callback) ->
    @onPrizeSelected = callback
  
  toElement: ->
    _this = @
    $clearfix = $('<div class="clearfix"></div>');
    $label = $("<label for=\"prize_#{@number}\">Prize</label>");
    $clearfix.append $label
    $input = $('<div class="input"></div>');
    $clearfix.append $input
    $text = $("<input type=\"text\" value=\"#{@name}\" id=\"prize_#{@number}\" class=\"span3\" />");
    $button = $('<input type="button" value="$$$" class="btn" />').click ->
      $me = $(@)
      $me.closest('.clearfix').remove()
      prize = $me.siblings('input[type=text]').val()
      if _this.onPrizeSelected
        _this.onPrizeSelected(prize)
    $input.append $text
    $input.append $button

    $clearfix
    
    ###
    <div class="clearfix">
      <label for="prize_0">Prize</label>
      <div class="input">
        <input type="text" id="prize_0" class="span3" />
        <input type="button" value="$$$" class="btn" />
      </div>
    </div>
    ###

###
Randomizer
###
window.Randomizer = class Randomizer
  constructor: (@participants) ->
  
  random = (min, max) ->
    # https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/random
    Math.floor(Math.random() * (max - min + 1)) + min
    
  pick: ->
    partNum = random(0, @participants.length - 1)
    @participants[partNum]

###
Banner
###
window.Banner = class Banner
  constructor: ->
    _this = @
    @banner = $('#success-banner')
    @banner.find('.close').click ->
      _this.hide()
    
  setWinner: (name) ->
    @banner.find('#participant-name strong').text(name)
    
  hide: ->
    @banner.hide()
    
  show: ->
    @banner.show()
