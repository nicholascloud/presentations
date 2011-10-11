using System;

namespace Weather {
    public class Alert {
        public string Type { get; internal set; }
        public string Description { get; internal set; }
        public string Date { get; internal set; }
        public string Expires { get; internal set; }
        public string Message { get; internal set; }
        public string Phenomena { get; internal set; }
        public string Significance { get; internal set; }
    }
}