using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using HamstringFX.data;
using Nancy.Authentication.Forms;
using Nancy.Security;

namespace HamstringFX.security {
  public class MemberAuthentication : IUserMapper, IMemberAuthentication {
    public MemberAuthentication(IHamstringData db, IHashStrategy hashStrategy) {
      _db = db;
      _hashStrategy = hashStrategy;
    }

    private readonly IHamstringData _db;
    private readonly IHashStrategy _hashStrategy;

    public IUserIdentity GetUserFromIdentifier(Guid identifier) {
      var member = _db.Members
        .Include(m => m.Privileges)
        .SingleOrDefault(m => m.Id == identifier);

      if (member == null) return null;

      return new HamstringUserIdentity {
        UserName = member.Handle,
        Claims = member.Privileges.Select(p => p.Claim).ToArray()
      };
    }

    public AuthenticationResult Authenticate(String handle, String password) {

      var member = _db.Members.SingleOrDefault(m => m.Handle == handle);

      if (member == null) {
        return AuthenticationResult.InvalidHandle;
      }

      if (!_hashStrategy.Matches(password, member.PasswordHash)) {
        return AuthenticationResult.IncorrectPassword;
      }

      return new AuthenticationResult(member.Id);
    }
  }
}