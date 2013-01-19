using Fiddler;

namespace AltNetFiddler {
  internal class Log {
    private readonly string _className;

    public Log(string className) {
      _className = className;
    }

    public void Info(string message) {
      FiddlerApplication.Log.LogString(
        string.Format("[AltNetFiddler][{0}] INFO {1}", _className, message));
    }

    public void Error(string message) {
      FiddlerApplication.Log.LogString(
        string.Format("[AltNetFiddler][{0}] ERROR {1}", _className, message));
    }
  }
}