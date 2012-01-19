using System;
using System.Threading;
using ThreadCommon;
using System.Collections.Generic;

namespace SemaphoreExample {
    
    class Program {

        private static readonly IDictionary<ConsoleKey, int> _consoleKeyMap = new Dictionary<ConsoleKey, int> {
            {ConsoleKey.D1, 1},
            {ConsoleKey.D2, 2},
            {ConsoleKey.D3, 3},
            {ConsoleKey.D4, 4},
            {ConsoleKey.D5, 5}
        };

        static void Main(string[] args) {

            Semaphore waitHandle = new Semaphore(0, 5);

            Worker[] workers = new Worker[20];
            for(int i = 0; i < workers.Length; i++) {
                workers[i] = new Worker("Worker" + i, waitHandle);
            }

            Console.WriteLine("press '1-5' to signal threads");
            Console.WriteLine("Press 'q' to quit");

            Thread.Sleep(2000);

            Array.ForEach(workers, w => w.Start());

            while (true) {
                ConsoleKey key = Console.ReadKey(true).Key;
                switch (key) {
                    case ConsoleKey.D1:
                    case ConsoleKey.D2:
                    case ConsoleKey.D3:
                    case ConsoleKey.D4:
                    case ConsoleKey.D5:
                        Release(_consoleKeyMap[key], waitHandle);
                        break;
                    case ConsoleKey.Q:
                        Console.WriteLine("quitting...");
                        Array.ForEach(workers, w => w.Stop());
                        waitHandle.Release();
                        return;
                    default:
                        break;
                }
            }
        }

        static void Release(int number, Semaphore semaphore) {
            Console.WriteLine(String.Format("signalling {0}...", number));
            try {
                semaphore.Release(number);
            } catch(SemaphoreFullException sx) {
                Console.WriteLine("You're pressing the button too fast! Haven't finished signalling my max limit yet!");
            }
        }
    }
}
