using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using Microsoft.Scripting;
using Microsoft.Scripting.Hosting;

namespace LanguageInterop.CLI {
    class Program {
        static void Main(string[] args) {

            var py = new Py(() => {
                const string pythonScript = "LanguageInterop.CLI.Customer.py";
                using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(pythonScript)) {
                    using (var reader = new StreamReader(stream)) {
                        return reader.ReadToEnd();
                    }
                }
            });

            dynamic customer = py.Instantiate("Customer", "Jon Snow", 23, new DateTime(2010, 3, 11));
            customer.award(150);

            Console.WriteLine(customer.getName());
            Console.WriteLine("Bronze: {0} | Silver: {1} | Gold: {2}",
                customer.isBronzeCustomer(), customer.isSilverCustomer(), customer.isGoldCustomer());
            Console.ReadLine();

        }
    }

    class Py {
        private readonly ScriptEngine _engine;
        private readonly ScriptScope _scope;

        public Py(Func<String> script) {
            _engine = ScriptRuntime.CreateFromConfiguration().GetEngine("python");
            string pythonScript = script();
            ScriptSource scriptSource = _engine.CreateScriptSourceFromString(pythonScript, SourceCodeKind.Statements);
            _scope = _engine.CreateScope();
            scriptSource.Execute(_scope);
        }

        public dynamic Instantiate(String className, params Object[] @params) {
            dynamic @class = _scope.GetVariable(className);
            return _engine.Operations.CreateInstance(@class, @params);
        }
    }
}
