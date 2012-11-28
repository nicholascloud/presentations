using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncPatterns
{
    class TCS {

        public async void Start() {
            Console.WriteLine("(TAP) Task Completion Source");
            Console.WriteLine(">>> Start()");

            Console.WriteLine("invocation on thread {0}", Thread.CurrentThread.ManagedThreadId);
            String data = await DownloadURL("http://stlalt.net");

            Console.WriteLine("writing data on thread {0}", Thread.CurrentThread.ManagedThreadId);
            Console.WriteLine(data);
            
            Console.WriteLine("<<< Start()");
        }

        private Task<String> DownloadURL(string url) {
            Console.WriteLine(">>> DownloadURL()");

            TaskCompletionSource<String> source = new TaskCompletionSource<String>();

            WebClient client = new WebClient();
            client.DownloadStringCompleted += (sender, args) => {
                Console.WriteLine("callback on thread {0}", Thread.CurrentThread.ManagedThreadId);
                var shortVersion = new String(args.Result.Take(255).ToArray());
                source.SetResult(shortVersion);
            };
            client.DownloadStringAsync(new Uri(url));

            Console.WriteLine("<<< DownloadURL()");
            return source.Task;
        }
    }
}
