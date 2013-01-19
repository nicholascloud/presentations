using System;
using System.Collections.Generic;
using System.Text;

namespace AltNetFiddler {
  internal class TraceFile {
    private readonly IDictionary<Guid, string> _traces;

    public TraceFile(IDictionary<Guid, String> traces) {
      _traces = traces;
    }

    public override string ToString() {
      var b = new StringBuilder();
      foreach (var kvp in _traces) {
        b.AppendLine(kvp.Key.ToString())
          .AppendLine(kvp.Value)
          .AppendLine(String.Empty)
          .AppendLine(String.Empty);
      }
      return b.ToString();
    }
  }
}