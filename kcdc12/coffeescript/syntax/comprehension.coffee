window.syntax = window.syntax or {}
window.syntax.comprehension = ->
  
  ###
    Comprehension
  ###
  
  console.title 'creating an array through comprehension'
  a = ['Kirk', 'Spock', 'Ohura', 'Checkov']
  b = (name[0] for name in a)
  console.log b # ["K", "S", "O", "C"]
  
  console.title 'creating an array through comprehension'
  attempt = 1
  makeAttempt = ->
    if attempt++ < 10 
      true
    else 
      false
  attempts = (a while a = makeAttempt())
  console.log attempts # [true, true, true, true, true, true, true, true, true]

  console.title 'creating an array through comprehension'
  h = {65: 'A', 66: 'B', 67: 'C', 68: 'D', 70: 'F'}
  a = ['A', 'C', 'D']
  r = (key for key, value of h when value in a)
  console.log r # ["65", "67", "68"]

  console.title 'stepping over values'
  evens = (i for i in [2..10] by 2)
  console.log evens # [2, 4, 6, 8, 10]
