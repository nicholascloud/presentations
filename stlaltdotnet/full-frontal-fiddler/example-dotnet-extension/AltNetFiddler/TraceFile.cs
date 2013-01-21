using System;
using System.Collections.Generic;
using System.Text;

namespace AltNetFiddler {
  internal class TraceFile {
    public TraceFile(IDictionary<Guid, String> traces) {
      _traces = traces;
    }

    private readonly IDictionary<Guid, string> _traces;
    private String _cache = String.Empty;

    public override string ToString() {
      if (_cache == String.Empty) {
        var b = new StringBuilder();
        foreach (var kvp in _traces) {
          b.AppendLine(kvp.Key.ToString())
           .AppendLine(kvp.Value)
           .AppendLine(String.Empty)
           .AppendLine(String.Empty);
        }
        _cache = b.ToString();
      }
      return _cache;
    }
  }
}