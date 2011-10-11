using System;
using NUnit.Framework;

namespace ConsoleApplication2
{
    [TestFixture]
    public class Number1Test
    {
        [Test]
        public void Foo1()
        {
            // Convert these to fluent syntax
            // * highlight, "find similar code", search
            // * replace, batch replace
            Assert.AreEqual(1.0, new Random().Next());
            Assert.AreEqual(7.0, new Random().Next());
            Assert.AreEqual(6.0, new Random().Next());
            Assert.AreEqual(5.0, new Random().Next());
            Assert.AreEqual(4.0, new Random().Next());
            Assert.AreEqual(3.0, new Random().Next());
        }

        [Test]
        public void Foo2()
        {
            // add another expr (note duplication)
            Assert.False(DateTime.Now.Second%2 == 0, "No odd seconds.");

            // use argument syntax
            int secs = DateTime.Now.Second%2;
            Assert.False(secs == 0, "No odd seconds. Seconds were {0}.", secs);
        }
    }
}