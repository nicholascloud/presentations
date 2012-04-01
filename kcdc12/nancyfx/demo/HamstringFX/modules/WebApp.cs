using System;
using HamstringFX.security;
using Nancy;
using Nancy.Authentication.Forms;
using Nancy.Extensions;

namespace HamstringFX.modules {
  public class WebApp : NancyModule {
    private readonly IMemberAuthorization _auth;

    public WebApp (IMemberAuthorization auth) {
      _auth = auth;

      Get["/"] = routeParams => View["hamstring.sshtml"];

      Get["/login"] = routeParams => View["login.sshtml"];

      Post["/login"] = routeParams => {

        //TODO: discuss the difference between routeParams, Request.Form, Request.Query, etc.

        AuthorizationResult authResult = auth.Authorize(Request.Form.handle, Request.Form.password);

        if (!authResult.IsAuthenticated) {
          string redirect = "~/login?fail=true";
          if (Request.Query.returnUrl != null) {
            redirect += "&returnUrl=" + Request.Query.returnURL;
          }
          return Context.GetRedirect(redirect);
        }

        DateTime? expiration = null;
        if (Request.Form.remember.HasValue) {
          expiration = DateTime.Now.AddDays(7);
        }

        return this.LoginAndRedirect(authResult.MemberId, expiration);
      };

      Get["/logout"] = routeParams => this.LogoutAndRedirect("~/");
    }
  }
}