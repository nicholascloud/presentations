namespace Weather {
    public class Forecast {
        public string Location { get; internal set; }
        public ForecastDay[] Days { get; internal set; }
    }
}