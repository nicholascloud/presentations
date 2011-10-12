using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace XTrader {
  internal class Resource {

    internal Resource(String name) {
      _name = name;
    }

    private String _name;
    private readonly List<Resource> _primaryDependencies;
    private readonly List<Resource> _secondaryDependencies;

    public bool DependsOn(Resource resource) {
      return _primaryDependencies.Contains(resource) ||
        _secondaryDependencies.Contains(resource);
    }

    public ResourceStock[] PrimaryStock() {
      return _primaryDependencies.Select(p => new ResourceStock(p, 0))
        .ToArray();
    }

    public ResourceStock[] SecondaryStock() {
      return _secondaryDependencies.Select(s => new ResourceStock(s, 0))
        .ToArray();
    } 
  }
}
