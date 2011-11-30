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
  destroyed = true if 'vampires' in destroyers
  cosole.log "are we destroyed? #{destroyed}"
  
  console.title 'the `unless` keyword is shorthand for a negative if condition'
  launch = ->
    console.log 'missles away!'
  everyoneDies = true
  launch() unless everyoneDies
  
  ###
    `switch` expressions
  ###
  