using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class Program
    {
        static void Main(string[] args) {
            var eap = new IAR();
            eap.Start();


            Console.ReadLine();
        }
    }
}
