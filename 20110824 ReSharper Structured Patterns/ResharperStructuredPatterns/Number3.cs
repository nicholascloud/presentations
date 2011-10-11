using System;
using System.Linq;

namespace ConsoleApplication2
{
    public class Number3
    {
        public void Foo()
        {
          // Quickly remove a try
          try
          {
            Console.WriteLine();
          }
          catch(Exception ex)
          {
            
          }

          // Is not a refactoring:  you can mess code up.
          try
          {
            Console.WriteLine();
          }
          catch (Exception ex)
          {
            Console.Error.Write(ex);
          }
        }

        public void Foo3()
        {
            // A nice example, but has a bug.
            foreach (var i in Enumerable.Range(0, 10))
            {
                if (i % 2 == 0)
                {
                    Console.Out.WriteLine("Even number: {0}", i);
                    Console.Out.WriteLine("Even number: {0}", i);
                    continue;
                }
                Console.WriteLine("Odd number {0}", i);
            }
        }
 
    }
}