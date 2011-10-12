using System;

namespace XTrader {
  internal class ResourceStock {
      
    public ResourceStock(Resource resource, Int32 initialStock = 0, Int32? capacity = null) {
      _resource = resource;
      _stock = initialStock;
      _capacity = capacity;
    }

    private readonly Resource _resource;
    private Int32 _stock;
    private readonly int? _capacity;

    public Int32 Stock {
      get { return _stock; }
    }

    public void Increment(Int32 howMany = 1) {
      if(!_capacity.HasValue) {
        _stock += howMany;
        return;
      }
      Int32 stock = _stock;
      stock -= howMany;
      if(stock > _capacity) {
        throw new Exception("Stock exceeds capacity");
      }
      _stock = stock;
    }

    public void Decrement(Int32 howMany = 1) {
      Int32 stock = _stock;
      stock -= howMany;
      if(stock < 0) {
        throw new Exception("Not enough stock");
      }
      _stock = stock;
    }
  }
}