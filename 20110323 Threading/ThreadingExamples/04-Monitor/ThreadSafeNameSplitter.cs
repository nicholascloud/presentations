using System;
using System.Threading;

namespace MonitorExample {

    class ThreadSafeNameSplitter : NameSplitter {

        private readonly Object _lock = new Object();

        public override string Name {
            get {
                lock (_lock) {
                    return base.Name;
                }
            }
            set {
                lock (_lock) {
                    base.Name = value;
                }
            }
        }

        public override NameData SplitName() {
            Monitor.Enter(_lock);
            try {
                return base.SplitName();
            } finally {
                Monitor.Exit(_lock);
            }
        }
    }
}