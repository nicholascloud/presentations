window.syntax = window.syntax or {}
window.syntax.hash = ->

  console.title 'hash with braces'
  h1 = {
    name: 'Arnie',
    weapon: 'Bazooka',
    shouts: ['Get to the choppa!', 'Get down!']
  }
  console.log h1
  
  console.title 'hashes without braces'
  h1 =
    name: 'Arnie'
    weapon: 'Machine Gun'
    shouts: ["It's showtime!", "I'll be back."]
  console.log h1
  
  console.title 'testing for key in hash'
  h1 =
    name: 'Arnie'
    weapon: 'Machine Gun'
    shouts: ["It's showtime!", "I'll be back."]
  console.log 'true' if 'name' of h1
  

  ###
    Iteration
  ###
  
  console.title 'iteration over hashes'
  h1 = { name: 'Picard', ship: 'Enterprise D', rank: 'Captain' }
  for key, value of h1
    console.log "#{key} --> #{value}"
    
  console.title 'iteration over owned properties of a hash'
  h1 = { name: 'Picard', ship: 'Enterprise D', rank: 'Captain' }
  for own key, value of h1
    console.log "#{key} --> #{value}"

  console.title 'iterating over a hash conditionally'
  h1 =
    f1: -> 'f1'
    f2: -> 'f2'
    f3: -> 'f3'
    foo: 'foo'
    bar: 'bar'
  for key, value of h1 when typeof value is 'function'
    console.log "#{key} --> #{value} --> #{value()}"
  
  