require.config({
  paths: {
    jquery: 'jquery-1.7.2.min',
    underscore: 'underscore-min',
    postal: 'postal.min',
    diagnostics: 'postal.diagnostics.min'
  }
});

require(['jquery', 'postal'], function ($, postal) {
      // Applying ignoreDuplicates to a subscription
    var dupChannel = postal.channel("WeepingAngel.*"),
        dupSubscription = dupChannel.subscribe(function(data) {
                              $('<li>' + data.value + '</li>').appendTo("#example4");
                          }).ignoreDuplicates();
    postal.channel("WeepingAngel.DontBlink")
          .publish({ value:"Don't Blink" });
    postal.channel("WeepingAngel.DontBlink")
          .publish({ value:"Don't Blink" });
    postal.channel("WeepingAngel.DontEvenBlink")
          .publish({ value:"Don't Even Blink" });
    postal.channel("WeepingAngel.DontBlink")
          .publish({ value:"Don't Close Your Eyes" });
    dupSubscription.unsubscribe();
});