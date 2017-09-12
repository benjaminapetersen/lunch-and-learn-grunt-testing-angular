'use strict';

(() => {
  angular
    .module('myApp', [
      'ngRoute'
    ])
    .config(($routeProvider) => {
      $routeProvider
        .when('/home', {
          template: '<home user="$resolve.user"></home>',
          resolve: {
            user: ($http) => {
              return $http
                      .get('mock/user.json')
                      .then((resp) => {
                        return resp.data;
                      });
            }
          }
        })
        .when('/about', {
          template: '<about></about>'
        })
        .when('/users', {
          template: '<users users="$resolve.users"></users>',
          resolve: {
            users: ($http) => {
              return $http
                      .get('mock/users.json')
                      .then((resp) => {
                        console.log('users->resolve', resp.data);
                        return resp.data;
                      });
            }
          }
        })
        .when('/create-user', {
          template: '<create-user></create-user>'
        })
        .otherwise({
          redirectTo: '/home'
        });
    })
    .constant('LINKS', [{
      text: 'Home',
      href:"#!/home"
    }, {
      text: 'About',
      href:"#!/about"
    }, {
      text: 'Users',
      href:"#!/users"
    }, {
      text: 'Create User',
      href:"#!/create-user"
    }])
    .run(() => {
      _.each([1,2,3], () => {
        console.log('hi');
      });
    });

})();
