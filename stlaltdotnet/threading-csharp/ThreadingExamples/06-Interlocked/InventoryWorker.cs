using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using ThreadCommon;

namespace InterlockedExample {
    
    class InventoryWorker : Worker {

        private readonly IInventory _inventory;

        public InventoryWorker(string name, WaitHandle waitForIt, IInventory inventory) 
            : base(name, waitForIt) {
            _inventory = inventory;
        }

        protected override void DoWork() {

            for (int i = 0; i < 3000; i++) {
                _inventory.Remove(1);
            }

            Console.WriteLine(String.Format("{0} removed 3000 items", Thread.CurrentThread.Name));
        }
    }
}
