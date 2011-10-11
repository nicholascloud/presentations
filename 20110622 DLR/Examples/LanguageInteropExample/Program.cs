using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Scripting.Hosting;

namespace LanguageInteropExample {
    class Program {
        static void RubyProductClassExample() {
            dynamic rubyObj = RubyExampleCode.CreateRubyProduct("MyRubyProduct", 7);
            Console.WriteLine("Product '{0}' is ${1:f} dollars", rubyObj.name, rubyObj.price);
        }

        static void RubyFuncExample() {
            var product1 = new Product("P1", 10.00M);
            var product2 = new Product("P2", 6.99M);
            decimal total = RubyExampleCode.AddPrices(product1, product2);
            Console.WriteLine("Total price is: ${0:f}", total);
        }

        static void Main(string[] args) {

            RubyProductClassExample();
            RubyFuncExample();
            Console.ReadLine();
        }
    }

    class RubyExampleCode {
        private static readonly ScriptEngine _rubyEngine;
        private static readonly ScriptScope _scope;

        static RubyExampleCode() {
            _rubyEngine = IronRuby.Ruby.CreateEngine();
            _scope = _rubyEngine.ExecuteFile("RubyProduct.rb");
        }

        public static dynamic CreateRubyProduct(string name, int price) {
            
            dynamic productClass = _rubyEngine.Runtime.Globals.GetVariable("RubyProduct");
            return _rubyEngine.Operations.CreateInstance(productClass, name, price);
        }

        public static decimal AddPrices(Product product1, Product product2) {

            Func<dynamic, dynamic, decimal> addPricesFunc = _scope.GetVariable("addPrices");
            decimal total = addPricesFunc(product1, product2);
            return total;
        }
    }

    class Product {
        public string Name { get; private set; }
        public decimal Price { get; private set; }
        public Product(string name, decimal price) {
            Name = name;
            Price = price;
        }
    }
}
