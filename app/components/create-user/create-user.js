'use strict';

angular
  .module('myApp')
  .component('createUser', {
    templateUrl: 'components/create-user/create-user.html',
    controller: [
      function() {
        console.log('Contact!');

        let newUser = () => {
          return {name: '', email: ''};
        };

        this.user = newUser();

        this.update = () => {
          this.savedUser = angular.copy(this.user);
        };

        this.reset = () => {
          this.user = newUser();
        };

      }
    ]
  });
