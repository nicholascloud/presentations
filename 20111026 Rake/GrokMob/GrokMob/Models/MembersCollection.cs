using System;
using System.Collections.Generic;
using System.Linq;

namespace GrokMob.Models {
  public class MembersCollection : List<AlphabetSection> {
    
    private const String ALPHABET =
      "abcdefghijklmnopqrstuvwxyz";

    public MembersCollection(IEnumerable<Member> allMembers) {
      
      Array.ForEach(ALPHABET.ToCharArray(), c => {
        var alpha = new AlphabetSection(c, allMembers);
        if(alpha.Members.Any()) {
          this.Add(alpha);
        }
      });
    }
  }
}