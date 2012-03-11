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
  # 99 bottles of beer on the wall!
  # 98 bottles of beer on the wall!
  # 97 bottles of beer on the wall!
  # 96 bottles of beer on the wall!
  # 95 bottles of beer on the wall!
  # 94 bottles of beer on the wall!
  # 93 bottles of beer on the wall!
  # 92 bottles of beer on the wall!
  # 91 bottles of beer on the wall!
  # 90 bottles of beer on the wall!
  # 89 bottles of beer on the wall!
  # 88 bottles of beer on the wall!
  # 87 bottles of beer on the wall!
  # 86 bottles of beer on the wall!
  # 85 bottles of beer on the wall!
  # 84 bottles of beer on the wall!
  # 83 bottles of beer on the wall!
  # 82 bottles of beer on the wall!
  # 81 bottles of beer on the wall!



  ###
    For loop
  ###
  console.title '`for` loop iterates over an array with the `in` keyword'
  captains = ['Kirk', 'Picard', 'Janeway', 'Cisco', 'Archer']
  for c in captains
    console.log c
  # Kirk
  # Picard
  # Janeway
  # Cisco
  # Archer

  console.title '`for` loop iterates over properties in an object/hash with the `of` keyword'
  ship = { captain: 'Picard', designation: 'NCC 1701D', classification: 'Galaxy' }
  for key, value of ship
    console.log "#{key} = #{value}"
  # captain = Picard
  # designation = NCC 1701D
  # classification = Galaxy



  ###
    While loop
  ###
  console.title '`while` loop will execute as long as a condition is true'
  count = 10
  log = (count) ->
    console.log 'iteration ' + count
  log(count) while count-- > 0
  # iteration 9
  # iteration 8
  # iteration 7
  # iteration 6
  # iteration 5
  # iteration 4
  # iteration 3
  # iteration 2
  # iteration 1
  # iteration 0



  ###
    Until loop
  ###
  console.title '`until` loop will execute until a condition is false'
  count = 10
  log = (count) ->
    console.log 'iteration ' + count
  log(count) until count-- is 0
  # iteration 9
  # iteration 8
  # iteration 7
  # iteration 6
  # iteration 5
  # iteration 4
  # iteration 3
  # iteration 2
  # iteration 1
  # iteration 0