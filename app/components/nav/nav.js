'use strict';
angular
  .module('myApp')
  .component('nav', {
    bindings: {},
    templateUrl: 'components/nav/nav.html',
    controller: [
      'LINKS',
      function(LINKS) {
        this.links = LINKS;
      }
    ]
  });
