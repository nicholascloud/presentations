using System;

namespace HamstringFX.security {
  public class AuthorizationResult {

    private AuthorizationResult() {
      MemberId = Guid.Empty;
      FailureMessage = String.Empty;
    }

    public AuthorizationResult(String failureMessage) : this() {
      if (String.IsNullOrEmpty(failureMessage)) {
        throw new ArgumentException("An empty failure message is meaningless.", "failureMessage");
      }
      FailureMessage = failureMessage;
    }

    public AuthorizationResult(Guid memberId) : this() {
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

    public static AuthorizationResult InvalidHandle {
      get { return new AuthorizationResult("No member exists for the provided handle."); }
    }

    public static AuthorizationResult IncorrectPassword {
      get { return new AuthorizationResult("An incorrect password was supplied."); }
    }
  }
}