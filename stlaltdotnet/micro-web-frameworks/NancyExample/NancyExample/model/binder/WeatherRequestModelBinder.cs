using System;
using Nancy;
using Nancy.ModelBinding;

namespace NancyExample {
    public class WeatherRequestModelBinder : IModelBinder {
        public object Bind(NancyContext context, Type modelType, params string[] blackList) {
            
            var weatherData = Enum.Parse(typeof(WeatherDataType), context.Request.Form["dataType"].Value);
            
            var weatherRequest = new WeatherRequest {
                Type = Enum.GetName(typeof(WeatherDataType), weatherData).ToLower(),
                Zip = context.Request.Form["zip"].Value
            };

            return weatherRequest;
        }

        public bool CanBind(Type modelType) {
            var canBind = typeof (WeatherRequest).IsAssignableFrom(modelType);
            return canBind;
        }
    }
}