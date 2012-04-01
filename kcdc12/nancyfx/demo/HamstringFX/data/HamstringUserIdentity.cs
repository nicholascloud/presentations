using System;
using System.Collections.Generic;
using Nancy.Security;

namespace HamstringFX.data {
  public class HamstringUserIdentity : IUserIdentity {
    public string UserName { get; set; }
    public IEnumerable<String> Claims { get; set; }
  }
}