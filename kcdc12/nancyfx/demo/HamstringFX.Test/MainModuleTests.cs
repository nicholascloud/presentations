using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Nancy;
using Nancy.Testing;
using Xunit;

namespace HamstringFX.Test {
  public class MainModuleTests {

    [Fact]
    public void ShouldShowFrontPage () {

      var bootstrapper = new DefaultNancyBootstrapper();
      var browser = new Browser(bootstrapper);

      var response = browser.Get("/", with => {
        with.HttpRequest();
      });

      Assert.Equal(response.StatusCode, HttpStatusCode.OK);
    }

    [Fact]
    public void ShouldShowLoginPage () {
      
    }
  }
}
