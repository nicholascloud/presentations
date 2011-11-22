#dish tests
describe 'Dish', ->
  
  beforeEach ->
    @dish = new Dish 'Sirloin steak $18.99 main course'
    
  it 'extracts title', ->
    (expect @dish.title).toEqual 'Sirloin steak'

  it 'extracts price', ->
    (expect @dish.price.cents).toEqual 1899

# money tests
describe 'Money', ->
  
  describe 'valid value', ->
    
    beforeEach ->
      @money = new Money '$15.99'
      
    it 'parses to cents', ->
      (expect @money.cents).toEqual 1599
      
    it 'formats to string', ->
      (expect @money.toString()).toEqual '$15.99'
      
  describe 'valid value with less than 10 cents', ->
    
    beforeEach ->
      @money = new Money '$15.05'
    
    it 'formats string correctly', ->
      (expect @money.toString()).toEqual '$15.05'
      
  describe 'invalid value', ->
    
    it 'sets cents to 0 if a valid value can\'t be parsed', ->
      money = new Money 'NOT A MONETARY VALUE'
      (expect money.cents).toEqual 0
