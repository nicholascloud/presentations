using System.Linq;

namespace ConsoleApplication2
{
  public class Number2
  {
     public void Foo()
     {
        // Single accepts a predicate - the Where is superfluous
       var stuff = new []{"Josh", "was", "here"};

       var less = stuff.Where(x => x.StartsWith("J")).Single();
     }
  }
}