'use strict';

angular
  .module('myApp')
  .component('home', {
    bindings: {
      user: '<'
    },
    templateUrl: 'components/home/home.html',
    controller: [
      function() {
        console.log('home?');
        let ctrl = this;

        this.$onInit = function() {
          console.log('Home!');
        };
        this.$onChanges = function(changes) {
          console.log('$onChanges', changes.user.currentValue);
          this.user = changes.user.currentValue;
        };

      }
    ]
  });
