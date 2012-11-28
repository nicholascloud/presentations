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
        static TCS _tcs = new TCS();

        static void Main(string[] args) {
            _eap.Start();
//            _iar.Start();
//            _tap.Start();
//            _tcs.Start();

//            var ex = new Exceptions();
//            ex.ExceptionNotReported();
//            ex.FinallyNotHit();

            Console.ReadLine();
        }
    }
}
