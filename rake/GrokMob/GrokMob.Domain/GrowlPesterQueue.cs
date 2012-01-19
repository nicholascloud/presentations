using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using GrokMob.Pester;
using Growl.Connector;

namespace GrokMob.Domain {
  public class GrowlPesterQueue : CanPester {
    public GrowlPesterQueue(String application, GrowlConnector connector) {
      _application = application;
      _growl = connector;
    }

    private readonly string _application;
    private readonly GrowlConnector _growl;
    private readonly Queue<GrowlMessage> _messages = new Queue<GrowlMessage>();

    public void QueueUp(GrowlMessage message) {
      _messages.Enqueue(message);
    }

    public void Pester() {
      while(_messages.Count > 0) {
        var message = _messages.Dequeue();
        Notification growlMessage = new Notification(
          _application, "SIMPLEGROWL", Guid.NewGuid().ToString(), message.Title, message.Content);
        _growl.Notify(growlMessage);
      }
    }

    public void Clear() {
      _messages.Clear();
    }
  }
}
