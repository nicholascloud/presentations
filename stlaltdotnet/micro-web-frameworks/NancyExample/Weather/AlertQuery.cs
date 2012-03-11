using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace Weather {
    public class AlertQuery {
        private readonly string _zipCode;
        private const string ALERT_URL = @"http://api.wunderground.com/auto/wui/geo/AlertsXML/index.xml?query={0}";

        public AlertQuery(String zipCode) {
            _zipCode = zipCode;
        }

        public Alert[] Fetch() {
            var doc = XDocument.Load(String.Format(ALERT_URL, _zipCode));
            var alerts = new List<Alert>();

            if(doc.Descendants("alert").Attributes("count").First().Value == "0") {
                return new Alert[0];
            } 

            if(!doc.Descendants("AlertItem").Any()) {
                return new Alert[0];
            }

            foreach(var item in doc.Descendants("AlertItem")) {
                alerts.Add(new Alert {
                    Date = item.Element("date").Value,
                    Description = item.Element("description").Value,
                    Expires = item.Element("expires").Value,
                    Message = item.Element("message").Value,
                    Phenomena = item.Element("phenomena").Value,
                    Significance = item.Element("significance").Value,
                    Type = item.Element("type").Value
                });
            }

            return alerts.ToArray();
        }
    }
}
