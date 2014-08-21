'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('PeopleCtrl', function ($scope) {
    $scope.people = [
      {
      	name: 'Marc',
      	age: 31,
      	occupation: 'beggar'
      },
      {
      	name: 'Taylor',
      	age: 22,
      	occupation: 'Drug-Dealer'
      },
      {
      	name: 'Taylor',
      	age: 22,
      	occupation: 'Drug-Dealer'
      },
      {
      	name: 'Taylor',
      	age: 22,
      	occupation: 'Drug-Dealer'
      },
      {
      	name: 'Taylor',
      	age: 22,
      	occupation: 'Drug-Dealer'
      }
    ];
  });
