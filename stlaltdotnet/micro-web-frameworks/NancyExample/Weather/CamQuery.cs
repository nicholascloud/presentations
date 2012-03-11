using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace Weather {
    public class CamQuery {
        private const string CAM_URL = @"http://api.wunderground.com/auto/wui/geo/GeoLookupXML/index.xml?query={0}";

        private readonly string _zip;

        public CamQuery(string zip) {
            _zip = zip;
        }

        public Cam[] Fetch() {

            var doc = XDocument.Load(String.Format(CAM_URL, _zip));

            var cams = new List<Cam>();

            foreach(var cam in doc.Descendants("cam")) {
                cams.Add(new Cam {
                    Handle = cam.Element("handle").Value,
                    CamID = cam.Element("camid").Value,
                    CamType = cam.Element("cameratype").Value,
                    Neighborhood = cam.Element("neighborhood").Value,
                    Zip = cam.Element("zip").Value,
                    City = cam.Element("city").Value,
                    State = cam.Element("state").Value,
                    Country = cam.Element("country").Value,
                    TimeZone = cam.Element("tzname").Value,
                    Lat = cam.Element("lat").Value,
                    Lon = cam.Element("lon").Value,
                    Updated = cam.Element("updated").Value,
                    WidgetImageURL = cam.Element("WIDGETCURRENTIMAGEURL").Value,
                    CurrentImageURL = cam.Element("CURRENTIMAGEURL").Value,
                    CamURL = cam.Element("CAMURL").Value
                });
            }

            return cams.ToArray();
        }
    }
}
