using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using IronPython.Hosting;
using Microsoft.Scripting;
using Microsoft.Scripting.Hosting;

namespace PythonScriptEngineExample {
    class Program {
        static void Main(string[] args) {

            if(args.Length != 1) {
                Console.WriteLine(Usage());
                return;
            }

            decimal amount;
            if(!Decimal.TryParse(args[0], out amount)) {
                Console.WriteLine(Usage());
                return;
            }

            ScriptEngine engine = Python.CreateEngine();
            ScriptScope scope = engine.CreateScope();

            var output = new StringBuilder();

            scope.SetVariable("amount", amount);
            scope.SetVariable("output", output);

            var script = GetScript();
            ScriptSource scriptSource = engine.CreateScriptSourceFromString(script, SourceCodeKind.AutoDetect);
            scriptSource.Execute(scope);

            Console.WriteLine("Message from script: " + output);

            var total = scope.GetVariable("total");
            Console.WriteLine(String.Format("(return value in .NET: {0})", total));

            Console.ReadLine();
        }

        static string GetScript() {
            const string scriptPath = "PythonScriptEngineExample.business-rules.py";
            using(var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(scriptPath)) {
                using(var reader = new StreamReader(stream)) {
                    return reader.ReadToEnd();
                }
            }
        }

        static string Usage() {
            const string usagePath = "PythonScriptEngineExample.usage.txt";
            using(var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(usagePath)) {
                using(var reader = new StreamReader(stream)) {
                    return reader.ReadToEnd();
                }
            }
        }
    }
}
