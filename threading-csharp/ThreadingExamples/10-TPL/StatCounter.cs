using System;
using System.Threading;
using System.Threading.Tasks;

namespace TPLExample {
    
    class StatCounter {
        private readonly IStatSource[] _statSources;
        private readonly CancellationTokenSource _cancellation = new CancellationTokenSource();

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

            var options = new ParallelOptions {
                CancellationToken = _cancellation.Token
            };

            try {
                
                Parallel.ForEach(_statSources, options, s => Execute(s, options));

            } catch(OperationCanceledException ex) {
                Console.WriteLine(ex.Message);
            }
        }

        public void Stop() {
            _cancellation.Cancel();
        }

        private void Execute(IStatSource state, ParallelOptions parallelOptions) {
            state.Calculate(parallelOptions.CancellationToken);
            lock (_statLock) {
                _pendingStatJobs--;
            }
        }
    }
}
