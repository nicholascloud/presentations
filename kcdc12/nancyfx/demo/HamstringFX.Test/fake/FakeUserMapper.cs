using System;
using Nancy.Authentication.Forms;
using Nancy.Security;

namespace HamstringFX.Test.fake {
  public class FakeUserMapper : IUserMapper {
    public IUserIdentity GetUserFromIdentifier(Guid identifier) {
      throw new NotImplementedException();
    }
  }
}