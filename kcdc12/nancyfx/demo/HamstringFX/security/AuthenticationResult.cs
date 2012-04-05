using System;

namespace HamstringFX.security {
  public class AuthenticationResult {

    private AuthenticationResult() {
      MemberId = Guid.Empty;
      FailureMessage = String.Empty;
    }

    public AuthenticationResult(String failureMessage) : this() {
      if (String.IsNullOrEmpty(failureMessage)) {
        throw new ArgumentException("An empty failure message is meaningless.", "failureMessage");
      }
      FailureMessage = failureMessage;
    }

    public AuthenticationResult(Guid memberId) : this() {
      if (memberId == Guid.Empty) {
        throw new ArgumentException("Members cannot have an empty ID", "memberId");
      }
      MemberId = memberId;
    }

    public Guid MemberId { get; private set; }
    public String FailureMessage { get; private set; }
    public bool IsAuthenticated {
      get { return MemberId != Guid.Empty; }
    }

    public static AuthenticationResult InvalidHandle {
      get { return new AuthenticationResult("No member exists for the provided handle."); }
    }

    public static AuthenticationResult IncorrectPassword {
      get { return new AuthenticationResult("An incorrect password was supplied."); }
    }
  }
}