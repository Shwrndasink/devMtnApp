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

    var myRef = new Firebase("https://devmtnapp.firebaseio.com/");
    var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // user authenticated with Firebase
        console.log("User ID: " + user.uid + ", Provider: " + user.provider);
      } else {
        // user is logged out
      }
    });
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
