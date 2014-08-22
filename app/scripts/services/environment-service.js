'use strict';

/**
 * @ngdoc service
 * @name devMtnAppApp.environmentService
 * @description
 * # environmentService
 * Service in the devMtnAppApp.
 */
angular.module('devMtnAppApp')
  .service('environmentService', function environmentService($window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getEnv: function () {
        return $window.env;
      },
      saveUserName: function(username){
      	$window.localStorage.setItem('username', username);
      },
      getUserName: function(){
      	return $window.localStorage.getItem('username');
      }
    };
  });
