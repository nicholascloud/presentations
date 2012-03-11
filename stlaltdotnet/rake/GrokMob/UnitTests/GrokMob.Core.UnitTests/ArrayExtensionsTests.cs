using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using NUnit.Framework;

namespace GrokMob.Core.UnitTests {
  [TestFixture]
  public class ArrayExtensionsTests {

    [Test]
    public void At_ItemInArray_ItemReturned() {
      var array = new[] { "foo", "bar", "baz" };
      const String expected = "bar";
      String actual = array.At(1, (String) null);
      Debug.WriteLine(actual);
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void At_ItemMissingFromArray_DefaultReturned() {
      var array = new[] { "foo", "bar", "baz" };
      const String expected = "default";
      String actual = array.At(10, "default");
      Debug.WriteLine(actual);
      Assert.AreEqual(expected, actual);
    }

    [Test]
    public void Map_ItemsInArrayMapped() {
      var array = new[] { 1, 2, 3, 4, 5 };
      var expected = new[] { 5, 10, 15, 20, 25 };
      var actual = array.Map(i => i * 5);
      CollectionAssert.AreEqual(expected, actual);
    }

    [Test]
    public void Each_ActionInvokedOnEachElement() {
      var array = new[] { 1, 2, 3, 4, 5 };
      int iteration = 0;
      array.Each(i => {
        Assert.AreEqual(i, array[iteration]);
        iteration++;
      });
      Assert.AreEqual(iteration, array.Length);
    }
  }
}
