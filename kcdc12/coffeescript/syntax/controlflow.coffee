window.syntax = window.syntax or {}
window.syntax.controlflow = ->
  
  ###
    `if` expressions
  ###
  console.title '`if` expressions are straight-forward'
  drink = 'coffee'
  if drink is 'coffee'
    console.log 'nom nom nom'
  else
    console.log 'gimme coffee!'
    
  console.title '`if` expressions can be evaluated on a single line'
  destroyers = ['zombies', 'aliens', 'robots']
  destroyed = if 'vampires' in destroyers then true else false
  console.log "are we destroyed? #{destroyed}"
  
  console.title 'the `unless` keyword is shorthand for a negative if condition'
  launch = ->
    console.log 'missiles away!'
  everyoneDies = false
  launch() unless everyoneDies
  everyoneDies = true
  launch() unless everyoneDies
  


  ###
    `switch` expressions
  ###
  console.title '`switch` statements eliminate the need for `break` statements'
  wielder = 'Vader' # red lightsaber
  switch wielder
    when 'Luke' then console.log 'blue lightsaber'
    when 'Obi-Wan' then console.log 'green lightsaber'
    when 'Vader' then console.log 'red lightsaber'
    else console.log 'no lightsaber for you!'

  console.title '`when` expressions can match multiple criteria'
  companion = 'Amy Pond' # 11th Doctor
  switch companion
    when 'Martha Jones', 'Donna Noble' then console.log '10th Doctor'
    when 'Rose Tyler' then console.log '9th Doctor'
    when 'Amy Pond', 'Rory Williams' then console.log '11th Doctor'

  console.title '`switch` statements can be bound to variables as well'
  flavor = 'sumatra'
  roast = switch flavor
    when 'blonde', "pike's place" then 'light'
    when 'columbian' then 'medium'
    when 'sumatra', 'verona' then 'dark'
    else 'extra dark'
  console.log roast # dark



  ###
    `try/catch/finally` blocks
  ###
  console.title '`try/catch/finally` blocks are simple'
  whenDoesTheNarwhalBacon = (answer) ->
    if answer isnt 'midnight'
      throw 'your meme-foo is weak'

  try
    whenDoesTheNarwhalBacon('noon')
  catch err
    console.log err
  finally
    console.log 'answer should have been `midnight`' 
