using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace ThreadPoolExample {
    
    class StatCounter {

        private readonly IStatSource[] _statSources;

        private int _totalStats = 0;
        private int _pendingStatJobs = 0;
        private readonly Object _statLock = new Object();

        public bool Ready {
            get {
                lock(_statLock) {
                    return _pendingStatJobs == 0;
                }
            }
        }

        public int TotalStats {
            get { return _totalStats; }
        }

        public StatCounter(params IStatSource[] statSources) {
            _statSources = statSources;
            _pendingStatJobs = statSources.Length;
        }

        public void Start() {
            
            _totalStats = 0;

            Array.ForEach(_statSources, s => ThreadPool.QueueUserWorkItem(Execute, s));

            //thread will block here until all jobs are done
            lock (_statLock) {
                while (_pendingStatJobs > 0) {
                    Monitor.Wait(_statLock);
                }
            }

            Array.ForEach(_statSources, s => {
                _totalStats += s.TotalCount;
                Console.WriteLine(String.Format("Totals for {0} : {1}", s.Name, s.TotalCount));
            });
        }

        private void Execute(object state) {
            (state as IStatSource).Calculate();
            lock (_statLock) {
                _pendingStatJobs--;
                Monitor.Pulse(_statLock);
            }
        }
    }
}
