using System;
using System.Threading;
using ThreadCommon;

namespace AutoResetEventExample {
    
    class Program {
        
        static void Main(string[] args) {

            EventWaitHandle waitHandle = new AutoResetEvent(false);

            Worker worker1 = new Worker("Worker1", waitHandle);
            Worker worker2 = new Worker("Worker2", waitHandle);

            Console.WriteLine("press 'g' to start threads");
            Console.WriteLine("Press 'p' to pause threads");
            Console.WriteLine("Press 'q' to quit");

            Thread.Sleep(2000);

            worker1.Start();
            worker2.Start();

            while (true) {
                ConsoleKey key = Console.ReadKey(true).Key;
                switch (key) {
                    case ConsoleKey.G:
                        Console.WriteLine("starting...");
                        waitHandle.Set();
                        break;
                    case ConsoleKey.P:
                        Console.WriteLine("pausing...");
                        waitHandle.Reset();
                        break;
                    case ConsoleKey.Q:
                        Console.WriteLine("quitting...");
                        worker1.Stop();
                        worker2.Stop();
                        return;
                    default:
                        break;
                }
            }
        }
    }
}
