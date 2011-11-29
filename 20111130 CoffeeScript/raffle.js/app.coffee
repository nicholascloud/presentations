jQuery ->
  names = window.raffle.participants
  participants = (new Participant(name) for name in names)
  for participant in participants
    $('#participant_list').append participant.toElement()

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
    $removeButton = $('<input type="button" value=" - " class="btn remove" />');
    $input.append $text
    $input.append $removeButton

    $clearfix     
    
    ###
    <div class="clearfix">
      <label for="participant_#{@number}">Participant</label>
      <div class="input">
        <input type="text" value="#{@name}" id="participant_#{@number}" class="span3" />
        <input type="button" value=" + " class="btn add" />
        <input type="button" value=" - " class="btn remove" />
      </div>
    </div>
    ###
    
window.Prize = class Prize
  constructor: (@name) ->
    @number = ++Prize.count
    
  @count = 0

