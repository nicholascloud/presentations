using System;
using System.Collections.Generic;
using System.Linq;
using HamstringFX.data;
using Nancy.Authentication.Forms;
using Nancy.Security;

namespace HamstringFX.security {
  public class MemberAuthorization : IUserMapper, IMemberAuthorization {
    public MemberAuthorization(IHamstringData db, IHashStrategy hashStrategy) {
      _db = db;
      _hashStrategy = hashStrategy;
    }

    private readonly IHamstringData _db;
    private readonly IHashStrategy _hashStrategy;

    public IUserIdentity GetUserFromIdentifier(Guid identifier) {
      var member = _db.Members.SingleOrDefault(m => m.Id == identifier);

      if (member == null) return null;

      return new HamstringUserIdentity {
        UserName = member.Handle,
        Claims = new List<string>()
      };
    }

    public AuthorizationResult Authorize(String handle, String password) {

      var member = _db.Members.SingleOrDefault(m => m.Handle == handle);

      if (member == null) {
        return AuthorizationResult.InvalidHandle;
      }

      if (!_hashStrategy.Matches(password, member.PasswordHash)) {
        return AuthorizationResult.IncorrectPassword;
      }

      return new AuthorizationResult(member.Id);
    }
  }
}