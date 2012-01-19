using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using Nancy;
using Nancy.ModelBinding;
using Weather;

namespace NancyExample {
    public class WeatherModule : NancyModule {

        public WeatherModule() {

            Get["/"] = p => {
                return View["~/views/home.cshtml"];
            };

            Get["/howto"] = p => {
                return View["~/views/howto.md"];
            };

            Post["/weather"] = p => {
                var model = this.Bind<WeatherRequest>();
                return Response.AsRedirect(String.Format("/{0}/{1}", model.Type, model.Zip));
            };

            Get["/alerts/{zip}"] = p => {
                var alertQuery = new AlertQuery(p.zip);
                var alerts = alertQuery.Fetch();
                return View["~/views/alert.cshtml", alerts];
            };

            Get["/forecast/{zip}"] = p => {
                var forecastQuery = new ForecastQuery(p.zip);
                var forecast = forecastQuery.Fetch();
                return View["~/views/forecast.cshtml", forecast];
            };

            Get["/cams/{zip}"] = p => {
                var camQuery = new CamQuery(p.zip);
                var cams = camQuery.Fetch();
                return View["~/views/cams.cshtml", cams];
            };

            Get["/js/{file}"] = p => {
                return Response.AsJs("assets/scripts/" + p.file as String);
            };

            Get["/style/{file}"] = p => {
                return Response.AsCss("assets/styles/" + p.file as String);
            };

            Get["/img/{file}"] = p => {
                return Response.AsImage("assets/graphics/" + p.file as String);
            };
        }
    }
}