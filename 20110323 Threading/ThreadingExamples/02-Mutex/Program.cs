using System;
using System.Threading;
using ThreadCommon;

namespace MutexExample {
    class Program {

        static readonly Mutex _mutex = new Mutex(false, "appMutex");

        static void Main(string[] args) {

            if(IsRunning()) {
                Console.WriteLine("A copy of this application is already running");
                return;
            }
            
            Console.WriteLine("Running the application!");
            Console.WriteLine("Press 'q' to quit");

            while(Console.ReadKey(true).Key != ConsoleKey.Q) {
                //spin!
            }

            //another copy of this program can now run
            _mutex.ReleaseMutex();
        }

        private static bool IsRunning() {
            return !_mutex.WaitOne(2000, false);
        }
    }
}
