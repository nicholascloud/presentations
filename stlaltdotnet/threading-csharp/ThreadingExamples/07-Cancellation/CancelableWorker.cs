using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using ThreadCommon;

namespace CancellationExample {

    class CancelableWorker : Worker {

        private const string CANCEL_MSG = "Thread {0} -> canceling";
        private readonly CancellationToken _cancellationToken;

        public CancelableWorker(string name, WaitHandle waitForIt, CancellationToken cancellationToken)
            : base(name, waitForIt) {
            _cancellationToken = cancellationToken;
        }

        protected override void DoWork() {

            int workIteration = 0;

            while (true) {

                if (_cancellationToken.IsCancellationRequested) {
                    Console.WriteLine(String.Format(CANCEL_MSG, Thread.CurrentThread.Name));
                    return;
                }

                //have we been signaled to wait?
                WaitForIt.WaitOne();

                Console.WriteLine(String.Format(MSG, Thread.CurrentThread.Name, workIteration++));

                Thread.Sleep(2000);
            }
        }
    }
}