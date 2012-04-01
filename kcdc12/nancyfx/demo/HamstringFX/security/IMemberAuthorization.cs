using System;

namespace HamstringFX.security {
  public interface IMemberAuthorization {
    AuthorizationResult Authorize(String handle, String password);
  }
}