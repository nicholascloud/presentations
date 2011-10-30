using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NUnit.Framework;

namespace GrokMob.Versioner.UnitTests {
  [TestFixture]
  public class RedmondVersionUnitTests {

    [Test]
    public void ctor() {

      var version = new RedmondVersion(1, 2, 3, 4);
      Assert.AreEqual(1, version.Major);
      Assert.AreEqual(2, version.Minor);
      Assert.AreEqual(3, version.Revision);
      Assert.AreEqual(4, version.Build);
    }

    [Test]
    public void Parse_() {

      var version = RedmondVersion.Parse("10.9.8.7");
    }
  }
}
