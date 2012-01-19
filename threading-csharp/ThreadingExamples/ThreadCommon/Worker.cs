using System;
using System.Threading;

namespace ThreadCommon {
    
    public class Worker {

        private readonly string _name;
        private readonly WaitHandle _waitForIt;
        private readonly Thread _thread;

        protected const string MSG = "Thread {0} -> Iteration {1}";

        public Worker(String name, WaitHandle waitForIt) {
            _name = name;
            _waitForIt = waitForIt;
            
            _thread = new Thread(DoWork) {
                Name = name + "Thread"
            };
        }

        protected String Name {
            get { return _name; }
        }

        protected WaitHandle WaitForIt {
            get { return _waitForIt; }
        }

        public virtual void Start() {
            _thread.Start();
        }

        public virtual void Stop() {
            try {
                if (_thread.IsAlive) {
                    _thread.Abort();
                }
            } catch(ThreadAbortException tax) { }
        }

        protected virtual void DoWork() {

            Console.WriteLine(String.Format("Worker {0} ready", _name));

            int workIteration = 0;

            for (int i = 0; i < 1000; i++) {

                //have we been signaled to wait?
                WaitForIt.WaitOne();

                Console.WriteLine(String.Format(MSG, Thread.CurrentThread.Name, workIteration++));

                Thread.Sleep(2000);
            }
        }
    }
}
