window.syntax = window.syntax or {}
window.syntax.string = ->

  ###
    Slicing
  ###
  
  console.title 'slicing a string with a range'
  cc = '4111111111111111'
  console.log cc
  lastFour = cc[-4..]
  console.log lastFour
