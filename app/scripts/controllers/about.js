'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
