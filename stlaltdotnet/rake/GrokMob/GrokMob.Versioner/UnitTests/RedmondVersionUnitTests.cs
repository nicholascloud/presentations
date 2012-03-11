using System;
using System.Diagnostics;
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

    [Test]
    public void ToString_FormattedStringReturned() {
      const String expected = "1.2.3.4";
      var v = new RedmondVersion(1, 2, 3, 4);
      String actual = v.ToString();
      Debug.WriteLine(actual);
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void ToArray_ArrayOfNumbersReturned() {
      Int32[] expected = new[] { 1, 2, 3, 4 };
      var v = new RedmondVersion(1, 2, 3, 4);
      var actual = v.ToArray();
      CollectionAssert.AreEqual(expected, actual);
    }

    [Test]
    public void ToTuple_TupleOfNumbersReturned() {
      Tuple<Int32, Int32, Int32, Int32> expected =
        new Tuple<Int32, Int32, Int32, Int32>(1, 2, 3, 4);
      var v = new RedmondVersion(1, 2, 3, 4);
      var actual = v.ToTuple();
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Equals_True() {
      var v1 = new RedmondVersion(1, 2, 3, 4);
      var v2 = new RedmondVersion(1, 2, 3, 4);
      Assert.IsTrue(v1.Equals(v2));
    }

    [Test]
    public void Equals_False() {
      var v1 = new RedmondVersion(1, 2, 3, 4);
      var v2 = new RedmondVersion(5, 6, 7, 8);
      Assert.IsFalse(v1.Equals(v2));
    }

    [Test]
    public void Equals_DifferentType_False() {
      var v1 = new RedmondVersion(1, 2, 3, 4);
      var other = new Object();
      Assert.IsFalse(v1.Equals(other));
    }

    [Test]
    public void Increment_Major_Incremented([Range(1, 5)] Int32 howMany) {
      var v = new RedmondVersion(1, 0, 0, 0);
      var expected = 1 + howMany;
      v.IncrementMajor(howMany);
      var actual = v.Major;
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Increment_Minor_Incremented([Range(1, 5)] Int32 howMany) {
      var v = new RedmondVersion(0, 1, 0, 0);
      var expected = 1 + howMany;
      v.IncrementMinor(howMany);
      var actual = v.Minor;
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Increment_Build_Incremented([Range(1, 5)] Int32 howMany) {
      var v = new RedmondVersion(0, 0, 1, 0);
      var expected = 1 + howMany;
      v.IncrementBuild(howMany);
      var actual = v.Build;
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Increment_Revision_Incremented([Range(1, 5)] Int32 howMany) {
      var v = new RedmondVersion(0, 0, 0, 1);
      var expected = 1 + howMany;
      v.IncrementRevision(howMany);
      var actual = v.Revision;
      Assert.AreEqual(expected, actual);
    }
  }
}
