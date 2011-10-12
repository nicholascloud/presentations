using System;
using System.Collections.Generic;
using System.Linq;

namespace XTrader {
  internal class Station {

    public Station(String name, Resource product, Int32 capacity) {
      _name = name;
      _product = product;
      _productStock = new ResourceStock(product, 0, capacity);
      _primaryResourceStock = _product.PrimaryStock();
      _secondaryResourceStock = _product.SecondaryStock();
    }

    private readonly String _name;
    private readonly Resource _product;
    private readonly ResourceStock _productStock;

    private readonly ResourceStock[] _primaryResourceStock;
    private readonly ResourceStock[] _secondaryResourceStock;

    private Sector _sector;

    public bool DependsOn(Resource resource) {
      return _product.DependsOn(resource);
    }

    public bool CanSupply(Station other) {
      return other.DependsOn(_product);
    }

    public void Supply(Resource resource, Int32 howMany) {
      if(!DependsOn(resource)) {
        throw new Exception("I don't depend on that resource");
      }

    }

    public SupplyRoute RouteTo(Station other) {
      
    }

    public Decimal SupplyRating {
      get {
        return Math.Round(_products.Count / 100M, 2);
      }
    }

    public Decimal DemandRating {
      get {
        Decimal primaryRating = 
      }
    }
  }
}