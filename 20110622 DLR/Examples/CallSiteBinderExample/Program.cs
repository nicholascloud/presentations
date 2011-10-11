using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;

namespace CallSiteBinderExample {
    class Program {

        static void BinderExample() {

            ConstantBinder binder = new ConstantBinder();

            CallSite<Func<CallSite, object, object, int>> callSite =
                CallSite<Func<CallSite, object, object, int>>.Create(binder);

            int result = callSite.Target(callSite, 1, 2);
            Console.WriteLine(result); //3
        }

        static void BinderWithRuleExample() {
            
            ConstantBinderWithRule binder = new ConstantBinderWithRule();

            CallSite<Func<CallSite, int, int>> callSite =
                CallSite<Func<CallSite, int, int>>.Create(binder);

            int result = callSite.Target(callSite, 8);
            Console.WriteLine("Late binding result: {0}", result);

            result = callSite.Target(callSite, 3);
            Console.WriteLine("Late binding result: {0}", result);
        }

        static void Main(string[] args) {

//            BinderExample();
            BinderWithRuleExample();

            Console.ReadLine();
        }
    }
}
