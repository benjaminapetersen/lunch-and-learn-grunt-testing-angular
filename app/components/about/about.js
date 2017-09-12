'use strict';

angular
  .module('myApp')
  .component('about', {
    templateUrl: 'components/about/about.html',
    controller: [
      function() {
        console.log('About!');
      }
    ]
  });
