using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Text;

namespace DynamicObjectsExample {
    class Program {
        private static void SimpleDynamicVariableExample() {
            String str1 = "Hello World 1";
            Console.WriteLine(str1);

            dynamic str2 = "Hello World 2";
            Console.WriteLine(str2);
        }

        private static void DynamicObjectGetSetExample() {
            dynamic dynObj = new DynObj();
            dynObj.FirstVal = "first";
            dynObj.SecondVal = "second";

            Console.WriteLine("First val: {0}", dynObj.FirstVal);
            Console.WriteLine("Second val: {0}", dynObj.SecondVal);
            Console.WriteLine("Third val: {0}", dynObj.ThirdVal);
        }

        private static void Main(string[] args) {
            
//            SimpleDynamicVariableExample();
            DynamicObjectGetSetExample();

            Console.ReadLine();
        }
    }

    class DynObj : DynamicObject {

        private readonly Dictionary<String, String> _values = 
            new Dictionary<String, String>();

        public override bool TryGetMember(GetMemberBinder binder, out object result) {
            if(!_values.ContainsKey(binder.Name)) {
                _values.Add(binder.Name, String.Empty);
            }
            result = _values[binder.Name];
            return true;
        }

        public override bool TrySetMember(SetMemberBinder binder, object value) {
            if(!_values.ContainsKey(binder.Name)) {
                _values.Add(binder.Name, value as String);
            } else {
                _values[binder.Name] = value as String;
            }
            return true;
        }
    }
}
