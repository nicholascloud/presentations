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
