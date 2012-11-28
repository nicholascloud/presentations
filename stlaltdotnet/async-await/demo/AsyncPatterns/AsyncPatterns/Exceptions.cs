using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class Exceptions
    {
        public async void ExceptionNotReported() {

            Console.WriteLine(">>> ExceptionNotReported()");

            try {
                Console.WriteLine("trying on thread {0}", Thread.CurrentThread.ManagedThreadId);
                await Task.Run(() => {
                    throw new Exception("bad things!");
                });
            } catch (Exception ex) {
                Console.WriteLine("catching on thread {0}", Thread.CurrentThread.ManagedThreadId);
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
            }

            Console.WriteLine("<<< ExceptionNotReported()");
        }

        public async void FinallyNotHit() {

            Console.WriteLine(">>> FinallyNotHit()");

            try {
                await GetNonCompletingTask();
            } finally {
                Console.WriteLine("Finally is never hit");
            }

            Console.WriteLine("<<< FinallyNotHit()");
        }

        private Task<String> GetNonCompletingTask() {
            var source = new TaskCompletionSource<String>();
            Task.Run(() => {
                if (false) {
                    source.SetResult("this never happens");
                }
            });
            return source.Task;
        }
    }
}
