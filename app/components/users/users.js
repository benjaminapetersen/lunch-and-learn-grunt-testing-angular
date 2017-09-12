'use strict';

angular
  .module('myApp')
  .component('users', {
    bindings: {
      users: '<'
    },
    templateUrl: 'components/users/users.html',
    controller: [
      '$http',
      function($http) {
        console.log('users?');
        let ctrl = this;
        this.$onInit = function() {
          console.log('Users!');
        };
        this.$onChanges = function(changes) {
          console.log('$onChanges', changes.users.currentValue);
          this.users = changes.users.currentValue;
        };
      }
    ]
  });
