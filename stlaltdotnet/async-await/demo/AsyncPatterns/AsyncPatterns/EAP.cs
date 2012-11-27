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
        private readonly WebClient _client = new WebClient();

        public EAP() {
            _client.DownloadStringCompleted += OnDownloadString;
        }

        public void Start() {
            Console.WriteLine(">>> entering Start()");
            DownloadURL("http://stlalt.net");
            Console.WriteLine("<<< exiting Start()");
        }

        private void DownloadURL(string url) {
            Console.WriteLine(">>> entering DownloadURL()");
            Console.WriteLine("invocation on thread {0}", Thread.CurrentThread.ManagedThreadId);
            _client.DownloadStringAsync(new Uri(url));
            Console.WriteLine("<<< exiting DownloadURL()");
        }

        private void OnDownloadString(Object sender, DownloadStringCompletedEventArgs args) {
            Console.WriteLine(">>> entering OnDownloadString");
            Console.WriteLine("callback on thread {0}", Thread.CurrentThread.ManagedThreadId);
            Console.WriteLine(new String(args.Result.Take(255).ToArray()));
            Console.WriteLine("<<< exiting OnDownloadString");
        }
    }
}
