using System;
using System.Collections.Generic;

namespace XTrader {
  internal class SupplyRoute {

    public SupplyRoute(Station startingPoint) {
      _startingPoint = startingPoint;
    }
    
    private Station _startingPoint;
    private Station _stoppingPoint;

    private class Stop {
      public Direction Direction { get; set; }
      public Sector Sector { get; set; }
      public Int32 SupplyRating { get; set; }
    }

    public void Hop(Sector sector) {
      
    }
  }
}