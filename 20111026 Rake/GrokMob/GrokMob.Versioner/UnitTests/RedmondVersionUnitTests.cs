using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using GrokMob.Versioning;
using NUnit.Framework;

namespace GrokMob.Versioner.UnitTests {
  [TestFixture]
  public class RedmondVersionUnitTests {

    [Test]
    public void ctor_MajorMinorBuildRevision() {

      var v = new RedmondVersion(1, 2, 3, 4);
      Assert.AreEqual(1, v.Major);
      Assert.AreEqual(2, v.Minor);
      Assert.AreEqual(3, v.Build);
      Assert.AreEqual(4, v.Revision);
    }

    [Test]
    public void Parse_MajorMinorBuildRevision() {

      var v = RedmondVersion.Parse("1.2.3.4");
      Assert.AreEqual(1, v.Major);
      Assert.AreEqual(2, v.Minor);
      Assert.AreEqual(3, v.Build);
      Assert.AreEqual(4, v.Revision);
    }

    [Test]
    public void Parse_MajorMinorBuild() {

      var v = RedmondVersion.Parse("1.2.3");
      Assert.AreEqual(1, v.Major);
      Assert.AreEqual(2, v.Minor);
      Assert.AreEqual(3, v.Build);
      Assert.AreEqual(0, v.Revision);
    }

    [Test]
    public void Parse_MajorMinor() {

      var v = RedmondVersion.Parse("1.2");
      Assert.AreEqual(1, v.Major);
      Assert.AreEqual(2, v.Minor);
      Assert.AreEqual(0, v.Build);
      Assert.AreEqual(0, v.Revision);
    }

    [Test]
    public void Parse_Major() {

      var v = RedmondVersion.Parse("1");
      Assert.AreEqual(1, v.Major);
      Assert.AreEqual(0, v.Minor);
      Assert.AreEqual(0, v.Build);
      Assert.AreEqual(0, v.Revision);
    }
  }
}
