window.syntax = window.syntax or {}
window.syntax.klass2 = ->
  
  log = (cart) ->
    console.log "subtotal: $#{cart.subtotal()}"
    console.log "total:    $#{cart.total()}"
    console.log "items:     #{cart.items}"
    console.log "discounts: #{cart.discounts}"
  
  cart = new Cart()
  cart.addItem(new Product('Jeans', 25))
    .addItem(new Product('Shirt', 10))
    .addItem(new Product('Shoes', 30))
    .addItem(new Product('Jacket', 50))
  
  ###
  cart.addItem({price: 30})
  cart.addItem({price: 20})
  cart.addItem({price: 10})
  cart.addItem({price: 50})
  ###
  
  console.title 'Cart with items'
  log cart
  
  d1 = new ProductDiscount(25, 0.15)
  d2 = new OrderDiscount(0.10)
  
  cart.applyDiscount(d1)
  cart.applyDiscount(d2)
  
  console.title 'Cart with discounts'
  log cart


###
  classes
###

window.Discount = class Discount
  constructor: (@rate) ->
  
  calc: (cart) ->
    throw 'abstract method'

window.ProductDiscount = class ProductDiscount extends Discount
  constructor: (@threshold, rate) ->
    super rate
    
  calc: (cart) ->
    prices = (item.price for item in cart.items when item.price > @threshold)
    
    console.debug prices, 'ProductDiscount'
    
    if prices.length == 0
      return 0
    
    prices.reduce (sum, price) ->
      console.log price, @rate 
      sum + (price * @rate)
    
    console.debug r, 'ProductDiscount'
  
  toString: -> "#{@rate}% off on items over $#{@threshold}"
      
window.OrderDiscount = class OrderDiscount extends Discount
  calc: (cart) ->  
    cart.subtotal() * @rate
  
  toString: -> "#{@rate}% off order subtotal"
  
window.Cart = class Cart
  constructor: ->
    @items = []
    @discounts = []
  
  addItem: (item) ->
    @items.push item
    @
    
  addItems: (item...) ->
    @items.push item...
    
  applyDiscount: (discount) ->
    @discounts.push discount
    
  subtotal: ->
    subtotal = 0
    (subtotal += item.price for item in @items).pop()
  
  discountTotal: ->
    toDiscount = for discount in @discounts
      discount.calc @
    
    console.debug toDiscount, 'Cart'
    
    if toDiscount.length is 0
      return 0
    
    toDiscount.reduce (sum, amt) -> sum + amt
  
  total: ->
    @subtotal() - @discountTotal()

window.Product = class Product
  constructor: (@name, @price) ->
  toString: -> "#{@name} $#{@price}"
