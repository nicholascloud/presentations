using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace Weather {
    public class ForecastQuery {
        private const string FORECAST_URL = @"http://api.wunderground.com/auto/wui/geo/ForecastXML/index.xml?query={0}";

        private readonly string _zip;

        public ForecastQuery(string zip) {
            _zip = zip;
        }

        public Forecast Fetch() {

            var doc = XDocument.Load(string.Format(FORECAST_URL, _zip));

            var forecastDays = new List<ForecastDay>();

            foreach(var day in doc.Descendants("simpleforecast").Descendants("forecastday")) {
                var forecastDay = new ForecastDay {
                    Period = Convert.ToInt32(day.Element("period").Value),
                    Date = day.Element("date").Element("pretty").Value,
                    Conditions = day.Element("conditions").Value,
                    High = day.Element("high").Element("fahrenheit").Value,
                    Low = day.Element("low").Element("fahrenheit").Value,
                    IconURL = day.Descendants("icon_set")
                        .Where(i => i.Attribute("name").Value == "Default")
                        .Elements("icon_url").First().Value
                };
                forecastDays.Add(forecastDay);
            }

            return new Forecast {
                Location = _zip,
                Days = forecastDays.ToArray()
            };
        }
    }
}