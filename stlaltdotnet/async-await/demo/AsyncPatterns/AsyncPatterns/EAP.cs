using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class EAP {

        public void Start() {
            Console.WriteLine("(EAP) Event-based Asynchronous Pattern");
            Console.WriteLine(">>> Start()");

            Console.WriteLine("invocation on thread {0}", Thread.CurrentThread.ManagedThreadId);
            DownloadURL("http://stlalt.net");
            
            Console.WriteLine("<<< Start()");
        }

        private void DownloadURL(string url) {
            Console.WriteLine(">>> DownloadURL()");
            
            WebClient client = new WebClient();
            client.DownloadStringCompleted += OnDownloadString;
            client.DownloadStringAsync(new Uri(url));
            
            Console.WriteLine("<<< DownloadURL()");
        }

        private void OnDownloadString(Object sender, DownloadStringCompletedEventArgs args) {
            Console.WriteLine(">>> OnDownloadString");
            Console.WriteLine("callback on thread {0}", Thread.CurrentThread.ManagedThreadId);

            var shortVersion = new String(args.Result.Take(255).ToArray());
            Console.WriteLine(shortVersion);
            
            Console.WriteLine("<<< OnDownloadString");
        }
    }
}
