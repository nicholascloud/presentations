using System;
using HamstringFX.security;

namespace HamstringFX.Test.fake {
  public class FakeMemberAuthentication : IMemberAuthentication {
    public AuthenticationResult Authenticate(String handle, String password) {
      throw new System.NotImplementedException();
    }
  }
}