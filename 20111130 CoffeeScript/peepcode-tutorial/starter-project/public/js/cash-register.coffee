window.Dish = class Dish
  constructor: (rawDescription='') ->
    [all, @title, @price] = @parseRawDescription rawDescription
    @price = new Money @price
    
  parseRawDescription: (rawDescription) ->
    pattern = ///
      ([^$]+)       #Title
      (\$\d+\.\d+)  #Price
    ///
    matches = rawDescription.match pattern
    match.trim() for match in matches
    
  toJson: ->
    # object literal
    title: @title
    price: @price.toString()

###
Money represents dollarts and cents
###
window.Money = class Money
  constructor: (rawMoney='') ->
    @cents = @parseCents rawMoney
    
  parseCents: (rawMoney) ->
    [dollars, cents] = (rawMoney.match /(\d+)/g) ? [0,0]
    +cents + 100 * dollars

  toString: ->
    dollarPart = Math.floor(@cents / 100)
    centsPart = @cents % 100
    padding = if centsPart < 10 then '0' else ''
    "$#{dollarPart}.#{padding}#{centsPart}"


window.Meal = class Meal
  constructor: ->
    @dishes = []
    
  add: (dishes...) ->
    @dishes.push dishes...
    
  totalPrice: ->
    total = new Money
    total.cents = total.cents + dish.price.cents for dish in @dishes
    total
    
  toJson: ->
    price: @totalPrice().toString()
    dishes: dish.toJson() for dish in @dishes
