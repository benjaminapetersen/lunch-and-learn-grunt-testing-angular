'use strict';
angular
  .module('myApp')
  .component('nav', {
    bindings: {
      linkClass: '=', // not bound as a string, so must have quotes!
      foo: '@'        // bind as a string
    },
    templateUrl: 'components/nav/nav.html',
    controller: [
      'LINKS',
      function(LINKS) {
        this.links = LINKS;
        // just here to prove out testing component controllers
        this.fakeThingToTest = 'foo';
      }
    ]
  });
