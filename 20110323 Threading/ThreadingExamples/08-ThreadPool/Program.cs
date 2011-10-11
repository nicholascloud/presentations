using System;

namespace ThreadPoolExample {

    class Program {

        static void Main(string[] args) {

            do {
                var statSources = new IStatSource[] {
                    new SubscriberStats(),
                    new WebVisitorStats(),
                    new SalesStats()
                };

                var statCounter = new StatCounter(statSources);

                statCounter.Start();

                Console.WriteLine("Total stats: " + statCounter.TotalStats);
                Console.WriteLine("Press 'q' to quit; any other key to run again");

            } while (Console.ReadKey(true).Key != ConsoleKey.Q);
        }
    }
}
