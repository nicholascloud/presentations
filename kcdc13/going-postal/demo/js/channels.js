/*global define*/
define(['postal'], function (postal) {
  'use strict';
  return {
    global: postal.channel('global'),
    categories: postal.channel('categories'),
    search: postal.channel('search')
  };
});