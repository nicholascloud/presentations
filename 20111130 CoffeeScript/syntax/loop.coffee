window.syntax = window.syntax or {}
window.syntax.loops = ->
  
  ###
    Loop
  ###
  console.title '`loop` will execute until a break statement'
  count = 99
  loop
    console.log count + ' bottles of beer on the wall!'
    count--
    break if count == 80
  
  ###
    For loop
  ###
  console.title '`for` loop iterates over an array with the `in` keyword'
  captains = ['Kirk', 'Picard', 'Janeway', 'Cisco', 'Archer']
  for c in captains
    console.log c
    
  console.title '`for` loop iterates over properties in an object/hash with the `of` keyword'
  ship = { captain: 'Picard', designation: 'NCC 1701D', classification: 'Galaxy' }
  for key, value of ship
    console.log "#{key} = #{value}"
  
  ###
    While loop
  ###
  console.title '`while` loop will execute as long as a condition is true'
  count = 10
  log = (count) ->
    console.log 'iteration ' + count
  log(count) while count-- > 0
  
  ###
    Until loop
  ###
  console.title '`until` loop will execute until a condition is false'
  count = 10
  log = (count) ->
    console.log 'iteration ' + count
  log(count) until count-- is 0
