using System;
using System.Collections.Generic;
using System.Linq;

namespace GrokMob.Models {
  public class AlphabetSection {
    public AlphabetSection(Char letter, IEnumerable<Member> members) {
      Letter = letter.ToString().ToUpper();
      Members = members.Where(m => m.Handle.StartsWith(Letter, StringComparison.OrdinalIgnoreCase))
        .OrderBy(m => m.Handle)
        .ToList();
    }
    public String Letter { get; private set; }
    public ICollection<Member> Members { get; private set; } 
  }
}