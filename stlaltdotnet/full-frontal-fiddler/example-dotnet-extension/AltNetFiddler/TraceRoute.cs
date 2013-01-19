using System;
using System.Diagnostics;
using System.Net;
using System.Net.NetworkInformation;
using System.Text;

namespace AltNetFiddler {
  internal class TraceRoute {
    private readonly string _address;
    private readonly int _maxHops = 10;

    public TraceRoute(string address, int maxHops) {
      _address = address;
      _maxHops = maxHops;
    }

     /// <see cref="http://coding.infoconex.com/post/2009/01/14/C-Traceroute-using-net-framework.aspx"/>
    public string Execute() {
      var hostEntry = Dns.GetHostEntry(_address);
      var ipAddress = hostEntry.AddressList[0];
      var hostName = hostEntry.HostName;

      var traceResults = new StringBuilder();

      using (var pingSender = new Ping()) {
        var pingOptions = new PingOptions();
        var stopWatch = new Stopwatch();
        var bytes = new byte[32];

        pingOptions.DontFragment = true;
        pingOptions.Ttl = 1;

        traceResults.AppendLine(
          string.Format(
            "Tracing route to {0} ({1}) over a maximum of {2} hops:",
            ipAddress,
            hostName,
            _maxHops));

        traceResults.AppendLine();

        for (int i = 1; i < _maxHops + 1; i++) {
          stopWatch.Reset();
          stopWatch.Start();

          PingReply pingReply = pingSender.Send(
            ipAddress,
            5000,
            new byte[32], pingOptions);

          stopWatch.Stop();

          traceResults.AppendLine(
            string.Format("{0}\t{1} ms\t{2}",
              i,
              stopWatch.ElapsedMilliseconds,
              pingReply.Address));

          if (pingReply.Status == IPStatus.Success) {
            traceResults.AppendLine();

            traceResults.AppendLine("Trace complete.");
            break;
          }

          pingOptions.Ttl++;
        }
      }

      return traceResults.ToString();
    }
  }
}