using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class Program {

        static EAP _eap = new EAP();
        static IAR _iar = new IAR();
        static TAP _tap = new TAP();

        static void Main(string[] args) {
            _tap.Start();
            Console.ReadLine();
        }
    }
}
