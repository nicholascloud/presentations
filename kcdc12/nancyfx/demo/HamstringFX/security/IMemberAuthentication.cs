using System;

namespace HamstringFX.security {
  public interface IMemberAuthentication {
    AuthenticationResult Authenticate(String handle, String password);
  }
}