using System;
using System.Threading;
using System.Threading.Tasks;

namespace TPLExample {
    class Program {
        static void Main(string[] args) {

            do {
                var statSources = new IStatSource[] {
                    new SubscriberStats(),
                    new WebVisitorStats(),
                    new SalesStats()
                };

                var cancellationTokenSource = new CancellationTokenSource();
                var statCounter = new StatCounter(statSources);

                Console.WriteLine("Press 'a' to abort");
                Thread.Sleep(2000);

                Task.Factory.StartNew(() => {
                    while (!statCounter.Ready) {
                        if (Console.ReadKey(true).Key == ConsoleKey.A) {
                            statCounter.Stop();
                            break;
                        }
                        Thread.Sleep(1000);
                    }
                });

                statCounter.Start();
                
                Console.WriteLine("Total stats: " + statCounter.TotalStats);
                Console.WriteLine("Press 'q' to quit; any other key to run again");

            } while (Console.ReadKey(true).Key != ConsoleKey.Q);
        }
    }
}
