/*global define:true*/

define('querystring', ['jquery'], function ($) {

  return {
    parse: function (query) {
      var queryParts = {};

      if (query.indexOf('?') === 0) {
        query = query.substr(1);
      }

      var pairs = query.split('&'),
        i = 0;
      for (i; i < pairs.length; i++) {
        var pair = pairs[i];
        var parts = pair.split('=');
        queryParts[parts[0]] = parts[1];
      }

      return {
        param: function (key, defaultTo) {
          if (!queryParts.hasOwnProperty(key)) {
            return defaultTo;
          }
          return queryParts[key];
        }
      };
    }
  };

});