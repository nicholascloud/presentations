using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Threading;
using Fiddler;

namespace AltNetFiddler {
  public class TraceRouteTamper : IAutoTamper, IDisposable {
    private const Int32 MAX_MS = 50;
    private static readonly Log _log = new Log("TraceRouteTamper");
    private readonly PreferenceBag.PrefWatcher _prefWatcher;

    //thread safe
    private readonly Object _lock = new Object();
    private readonly Dictionary<Guid, String> _traceResults = new Dictionary<Guid, String>();
    private readonly String _traceResultsOutputFile = String.Empty;
    private bool _showOutput = false;

    public TraceRouteTamper() {
      var dir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
      
      lock (_lock) {
        _traceResultsOutputFile = Path.Combine(dir, "AltNetFiddler.txt");
        //set up default preferences
        _showOutput = FiddlerApplication.Prefs.GetBoolPref(Prefs.SHOW_OUTPUT, false);
      }
      
      //watch for preference changes
      _prefWatcher = FiddlerApplication.Prefs.AddWatcher(Prefs.PREFIX, OnPreferencesChange);
    }

    private void OnPreferencesChange(Object sender, PrefChangeEventArgs args) {
      if (args.PrefName == Prefs.SHOW_OUTPUT) {
        lock (_lock) {
          _showOutput = args.ValueBool;
        }
        _log.Info("preference " + args.PrefName + " changed to " + args.ValueBool);
      }  
    }

    /// <summary>
    ///   Called before the user can edit a response using the Fiddler Inspectors, unless
    ///   streaming.
    /// </summary>
    public void AutoTamperResponseBefore(Session oSession) {
      DateTime connectedAt = oSession.Timers.ServerGotRequest;
      DateTime responseAt = oSession.Timers.ServerBeginResponse;

      if (responseAt.Subtract(connectedAt).Milliseconds < MAX_MS) {
        return;
      }

      String host = oSession.oRequest.host;

      ThreadPool.QueueUserWorkItem(state => {
        var trace = new TraceRoute((String) state, 10);
        try {
          String result = trace.Execute();
          UpdateTraceResults(result);
        } catch (Exception ex) {
          _log.Error("[AutoTamperResponseBefore] " + ex.Message);
        }
      }, host);
    }

    private void UpdateTraceResults(String results) {
      lock (_lock) {
        _traceResults.Add(Guid.NewGuid(), results);
        
        if (_traceResults.Keys.Count <= 5) {
          return;
        }

        var file = new TraceFile(_traceResults);
        
        try {
          using (var stream = File.CreateText(_traceResultsOutputFile)) {
            stream.Write(file.ToString());
          }
          _log.Info("[UpdateTraceResults] output written to " + _traceResultsOutputFile);
        } catch (Exception ex) {
          _log.Error("[UpdateTraceResults] " + ex.Message);
        } finally {
          _traceResults.Clear();
        }

        if (_showOutput) {
          _log.Info(file.ToString());
        }

      }
    }

    /// <summary>
    ///   Called when Fiddler User Interface is fully available
    /// </summary>
    public void OnLoad() {
      _log.Info("[OnLoad] LOADED");
    }

    /// <summary>
    ///   Called when Fiddler is shutting down
    /// </summary>
    public void OnBeforeUnload() {
    }

    /// <summary>
    ///   Called before the user can edit a request using the Fiddler Inspectors
    /// </summary>
    public void AutoTamperRequestBefore(Session oSession) {
    }

    /// <summary>
    ///   Called after the user has had the chance to edit the request using the Fiddler
    ///   Inspectors, but before the request is sent
    /// </summary>
    public void AutoTamperRequestAfter(Session oSession) {
    }

    /// <summary>
    ///   Called after the user edited a response using the Fiddler Inspectors.  Not called
    ///   when streaming.
    /// </summary>
    public void AutoTamperResponseAfter(Session oSession) {
    }

    /// <summary>
    ///   Called Fiddler returns a self-generated HTTP error (for instance DNS lookup failed,
    ///   etc)
    /// </summary>
    public void OnBeforeReturningError(Session oSession) {
    }

    private bool _isDisposed = false;

    public void Dispose() {
      Dispose(true);
    }

    private void Dispose(bool disposing) {
      if (disposing) {
        if (_isDisposed) {
          return;
        }
        FiddlerApplication.Prefs.RemoveWatcher(_prefWatcher);
        _isDisposed = true;
      }
    }
  }
}