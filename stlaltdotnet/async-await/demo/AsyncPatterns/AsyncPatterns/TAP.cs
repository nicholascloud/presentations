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
            Console.WriteLine("pre invoke");
            Invoke();
            Console.WriteLine("post invoke");
        }

        private async void Invoke() {
            Console.WriteLine(">>> enter Invoke()");
            await DoWork();
            Console.WriteLine("<<< exit Invoke()");
        }

        private Task DoWork() {
            Console.WriteLine(">>> enter DoWork()");
            Thread.Sleep(5000);
            var task = new Task(() => {
                Console.WriteLine(">>> enter worker thread");
                Thread.Sleep(3000);
                Console.WriteLine("<<< exit worker thread");
            });
            task.Start();
            Console.WriteLine("<<< exit DoWork()");
            return task;
        }
    }
}
