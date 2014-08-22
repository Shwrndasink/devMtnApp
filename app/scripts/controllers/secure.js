'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:SecureCtrl
 * @description
 * # SecureCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('SecureCtrl', function ($scope, username, $state) {
    if (!username) {
      $state.go('login');
    }

    $scope.username = username;
  });
