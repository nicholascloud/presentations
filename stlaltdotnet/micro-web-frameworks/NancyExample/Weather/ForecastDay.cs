namespace Weather {
    public class ForecastDay {
        public int Period { get; internal set; }
        public string Date { get; internal set; }
        public string High { get; internal set; }
        public string Low { get; internal set; }
        public string Conditions { get; internal set; }
        public string IconURL { get; internal set; }
    }
}