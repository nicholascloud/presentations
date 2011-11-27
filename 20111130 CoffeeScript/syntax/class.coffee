window.syntax = window.syntax or {}
window.syntax.class = ->
  s = new Square(15)
  console.log s
  console.log s.computeArea()
  
  c = new Circle(15)
  console.log c
  console.log c.computeArea()


class Shape
  constructor: (@width) ->
  computeArea: -> throw new Error('I am an abstract class!')

class Square extends Shape
  computeArea: -> Math.pow @width, 2

class Circle extends Shape
  radius: -> @width / 2
  computeArea: -> Math.PI * Math.pow @radius(), 2

