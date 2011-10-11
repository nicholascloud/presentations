class RubyProduct
  attr_accessor :name
  attr_accessor :price
  
  def initialize(name, price)
    @name = name
    @price = price
  end
end

def addPrices(product1, product2)
  return product1.Price + product2.Price
end
