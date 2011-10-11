using System.Threading;

namespace InterlockedExample {

    class ThreadSafeInventory : IInventory {
        
        private int _itemsInStock;

        public ThreadSafeInventory(int itemsInStock) {
            _itemsInStock = itemsInStock;
        }

        public int ItemsInStock {
            get { return _itemsInStock; }
        }

        public void Remove(int items) {
            Interlocked.Decrement(ref _itemsInStock);
        }

        public void Add(int items) {
            Interlocked.Increment(ref _itemsInStock);
        }
    }
}