// Stephen Toub

using System;
using System.Threading;
using System.Diagnostics;
using System.Collections.Generic;

namespace MsdnMag
{
    class Program
    {
        static Random rand = new Random();
        static string[] data = new string[] { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P" };

        static void Main(string[] args)
        {
            int n = 100;
            int count = n;
            for (int i = 0; i < n; i++)
            {
                new Thread((ThreadStart)delegate
                {
                    TakeSomeLocks();
                    if (Interlocked.Decrement(ref count) == 0) Console.WriteLine("Done!");
                }).Start();
            }

            Console.ReadLine();
        }

        static void TakeSomeLocks()
        {
            List<string> monitors = new List<string>();
            int numberOfLocks;
            lock (rand)
            {
                numberOfLocks = rand.Next(1,5);
                for (int i = 0; i < numberOfLocks; i++)
                {
                    monitors.Add(data[rand.Next(0, data.Length)]);
                }
            }

            for(int i=0; i<monitors.Count; i++)
            {
                DdMonitor.Enter(monitors[i]);
                Thread.Sleep(1);
            }
            Console.WriteLine("Successfully entered " + string.Join(",", monitors.ToArray()));
            for (int i = monitors.Count-1; i >= 0; i--)
            {
                DdMonitor.Exit(monitors[i]);
            }
        }
    }
}