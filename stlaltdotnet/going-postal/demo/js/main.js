require.config({
  paths: {
    jquery: 'lib/jquery-1.7.2.min',
    underscore: 'lib/underscore-min',
    postal: 'lib/postal.min',
    diagnostics: 'lib/postal.diagnostics.min'
  }
});

require(['jquery', 'postal', 'home'], function ($, bus) {
  bus.publish('ready');
});