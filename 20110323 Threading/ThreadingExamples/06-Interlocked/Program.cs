using System;
using System.Threading;
using ThreadCommon;

namespace InterlockedExample {
    class Program {
        static void Main(string[] args) {

            WaitHandle wait = new ManualResetEvent(true);
            bool safe = true;

            do {
                IInventory inventory = safe ? 
                    (IInventory) new ThreadSafeInventory(1000000) : 
                    new Inventory(1000000);

                var workers = new InventoryWorker[10];
                for (int i = 0; i < workers.Length; i++) {
                    workers[i] = new InventoryWorker("Worker" + i, wait, inventory);
                }

                int initialInventory = inventory.ItemsInStock;

                Console.WriteLine("Initial inventory count: " + inventory.ItemsInStock);
                Console.WriteLine("10 workers removing 3000 items each");

                Array.ForEach(workers, w => w.Start());

                Thread.Sleep(2000);

                Console.WriteLine("Expected remaining inventory: " + (initialInventory - 30000));
                Console.WriteLine("Actual remaining inventory: " + inventory.ItemsInStock);
                Console.WriteLine("Press 'q' to quit; any other key to continue");

            } while (Console.ReadKey(true).Key != ConsoleKey.Q);
        }
    }
}
