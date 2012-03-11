window.syntax = window.syntax or {}
window.syntax.function = ->
  
  ###
    Functions
  ###
  console.title 'Functions are declared with a dash-rocket'
  func = ->
    console.log 'inside a function'
  func()
  
  console.title 'Function arguments precede the dash-rocket'
  func = (first, last) ->
    console.log "first = #{first}, last = #{last}"
  func('Winston', 'Churchill')
  
  console.title 'Parentheses may be omitted for functions with one or more arguments'
  func = (city, state) ->
    console.log "#{city}, #{state}"
  func 'St. Louis', 'MO'
  
  console.title 'Functions may be passed as arguments to other functions'
  excited = (words) ->
    console.log "!!! #{words} !!!"
  sad = (words) ->
    console.log "#{words} :-("
  say = (words, emotion) ->
    emotion words
  say "It's my birthday", excited
  say "It's my birthday", sad
  
  console.title 'Functions always return the value of the last expression'
  func = ->
    "this will be returned"
  console.log func()
