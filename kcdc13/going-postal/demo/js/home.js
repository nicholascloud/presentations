/*global requirejs, rquire*/
'use strict';

requirejs.config({
  paths: {
    'jquery': 'lib/jquery-1.9.1',
    'underscore': 'lib/underscore',
    'postal': 'lib/postal'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  }
});

require([
  'jquery',
  'channels',
  'jqueryext',
  'tagCloud',
  'offers',
  'search'
], function ($, channels) {
  $().ready(function () {
    channels.global.publish({topic: 'ready'});
    channels.categories.publish({
      topic: 'categories.changed',
      data: ['art']
    });
  });
});