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

###
Money represents dollarts and cents
###
window.Money = class Money
  constructor: (rawMoney) ->
    @cents = @parseCents rawMoney
    
  parseCents: (rawMoney) ->
    [dollars, cents] = (rawMoney.match /(\d+)/g) ? [0,0]
    +cents + 100 * dollars

  toString: ->
    dollarPart = Math.floor(@cents / 100)
    centsPart = @cents % 100
    padding = if centsPart < 10 then '0' else ''
    "$#{dollarPart}.#{padding}#{centsPart}"
