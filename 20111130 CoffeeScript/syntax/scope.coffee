window.syntax = window.syntax or {}
window.syntax.scope = ->

  console.title 'normal variables are wrapped in a function closure'
  meaningOfLife = 42
  console.log "meaningOfLife = #{meaningOfLife}"
  
  console.title 'variables can be made global by accessing a global environment object'
  global = window
  global.meaningOfLife = 42
  console.log "window.meaningOfLife = #{window.meaningOfLife}"
  
  
