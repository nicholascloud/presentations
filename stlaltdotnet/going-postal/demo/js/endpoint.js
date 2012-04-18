
define('endpoint', ['jquery'], function ($) {

  var urls = {
    'twitter.search': 'http://search.twitter.com/search.json?q={q}&rpp={rpp}&include_entities={include_entities}&result_type={result_type}'
  };

  var transpose = function (url) {
    var plug = function (args) {
      var plugged = url;
      for(var prop in args) {
        if (!args.hasOwnProperty(prop)) continue;
        var key = '{'.concat(prop, '}');
        if (plugged.indexOf(key) < 0) {
          plugged += '&'.concat(prop, '=', key);
        }
        plugged = plugged.replace(key, args[prop].toString());
      }
      return plugged;
    };

    return {
      use: function (args) {
        return plug(args);
      }
    };
  };

  return {
    twitter: {
      search: function (args) {
        $.extend({
          q: '',
          rpp: 10,
          include_entities: 'true',
          result_type: 'mixed'
        }, args);
        return transpose(urls['twitter.search']).use(args);
      }
    }
  };
})