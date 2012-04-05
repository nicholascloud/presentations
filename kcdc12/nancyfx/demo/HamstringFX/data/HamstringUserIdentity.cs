using System;
using System.Collections.Generic;
using System.Linq;
using Nancy.Security;

namespace HamstringFX.data {
  public class HamstringUserIdentity : IUserIdentity {
    public string UserName { get; set; }
    public IEnumerable<String> Claims { get; set; }
  }

  public static class IUserIdentityExtensions {
    
    public static Member ToMember(this IUserIdentity @this, IHamstringData db) {
      return db.Members.Single(m => m.Handle == @this.UserName);
    }
  }
}