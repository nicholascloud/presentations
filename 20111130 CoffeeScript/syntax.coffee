# CoffeeScript syntax

# a hash symbol is a comment!

###
  Three hash symbols
  form a multi-line comment
###

###
  There are no top level variables in CoffeeScript.
  CoffeeScript puts all variable declarations in an 
  anonymous function closure.
###
meaningOfLife = 42

###
  Global variables can be forced by explicitly accessing
  the `this` variable in global scope.
###
global = this
global.meaningOfLife = 42

# functions
sum (a, b) -> a + b

# function with array of arguments

