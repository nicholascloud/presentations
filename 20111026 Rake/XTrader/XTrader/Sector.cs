using System;
using System.Collections.Generic;
using System.Linq;

namespace XTrader {
  internal class Sector {
    private List<Station> _stations;
    private Dictionary<Direction, Sector> _neighbors; 

    public void AddNeighbor(Direction direction, Sector sector) {
      
    }

    public bool HasNeighbor(Direction direction) {
      return _neighbors.ContainsKey(direction);
    }

    public bool IsNeighbor(Sector sector) {
      return _neighbors.ContainsValue(sector);
    }

    public void Foo(SupplyRoute route, Int32 maxHops) {
    
    }

    public bool HomeOf(Station station) {
      return _stations.Contains(station);
    }

    public bool CanSupply(Station station) {
      return _stations.Any(s => s.CanSupply(station));
    }
  }
}