using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class TAP {

        public void Start() {
            Console.WriteLine("(TAP) Task-based Asynchronous Pattern");
            Console.WriteLine(">>> Start()");
            
            Invoke();
            
            Console.WriteLine("<<< *** Start() ***");
        }

        private void ProcessResult(Task<String> task) {
            Console.WriteLine(">>> ProcessResult()");

            Console.WriteLine(task.Result); //All Done!
            
            Console.WriteLine("<<< ProcessResult()");
        }

        private void Invoke() {
            Console.WriteLine(">>> Invoke()");
            
            DoWork().ContinueWith(ProcessResult);
            
            Console.WriteLine("<<< Invoke()");
        }

        private Task<String> DoWork() {
            Console.WriteLine(">>> DoWork()");

            var task = new Task<String>(() => {
                Console.WriteLine(">>> task thread");
                Thread.Sleep(3000);
                Console.WriteLine("<<< task thread");
                return "All Done!";
            });
            
            task.Start();
            
            Console.WriteLine("<<< DoWork()");
            return task;
        }
    }
}
