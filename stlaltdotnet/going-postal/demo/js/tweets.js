/*global define:true*/

define('tweets', ['jquery', 'postal', 'endpoint', 'querystring'],
  function ($, bus, endpoint, querystring) {

  var search = function (args, onSearchComplete) {
    var queryParams = {q: 'stlaltdotnet'};
    $.extend(queryParams, args);
    var query = endpoint.twitter.search(defaults);
    $.ajax({
      url: query,
      type: 'GET',
      dataType: 'jsonp',
      data: {},
      success: function (data, textStatus, jqXHR) {
        onSearchComplete(null, data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        onSearchComplete('Unable to complete the query.');
      }
    })
  };

  var fetchTweets = function (onTweetsFetched) {
    var args = {};
    var fetchInterval = setInterval(function () {
      search(args, function (err, data) {
        if (err) {
          onTweetsFetched(err);
          //clearTimeout(fetchInterval);
          return;
        }

        var query = queryString.parse(data.refresh_url);
        args.since_id = query.param('since_id', '');

        onTweetsFetched(null, data.results);
      });
    }, 10000);
  };


  return {
    appendTo: function (selector) {

    }
  };
});