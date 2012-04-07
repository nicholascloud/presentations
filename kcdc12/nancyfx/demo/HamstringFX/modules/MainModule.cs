using System;
using HamstringFX.model;
using HamstringFX.security;
using Nancy;
using Nancy.Authentication.Forms;
using Nancy.Extensions;

namespace HamstringFX.modules {
  public class MainModule : NancyModule {

    public MainModule (IMemberAuthentication auth, Models models) {

      Get["/"] = routeParams => {
        var model = models.MainModel().Create();
        return View["hamstring.sshtml", model];
      };

      Get["/login"] = routeParams => View["login.sshtml"];

      Post["/login"] = routeParams => {

        //TODO: discuss the difference between routeParams, Request.Form, Request.Query, etc.

        AuthenticationResult authResult = auth.Authenticate(Request.Form.handle, Request.Form.password);

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