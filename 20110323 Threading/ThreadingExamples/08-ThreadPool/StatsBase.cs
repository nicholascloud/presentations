using System;
using System.Threading;

namespace ThreadPoolExample {

    class StatsBase : IStatSource {

        private int _totalCount;

        public int TotalCount {
            get { return _totalCount; }
        }

        public string Name {
            get { return GetType().Name; }
        }

        public void Calculate() {
            
            var random = new Random();
            _totalCount = 0;

            for(int i = 0; i < 10; i++) {
                Console.WriteLine(String.Format("Job {0} counting on thread {1}", Name, Thread.CurrentThread.ManagedThreadId));
                _totalCount += 1;
                Thread.Sleep(random.Next(0, i) * 200);
            }
        }
    }
}