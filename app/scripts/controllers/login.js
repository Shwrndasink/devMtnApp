'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('LoginCtrl', ["$rootScope", "$scope", "$firebase", "$firebaseSimpleLogin", "$state", function($rootScope, $scope, $firebase, $firebaseSimpleLogin, $state) {
    var ref = new Firebase("https://devmtnapp.firebaseio.com/");

    // create an AngularFire reference to the data
    var sync = $firebase(ref);

    $rootScope.authClient = $firebaseSimpleLogin(ref);
    $scope.login = function(){	
    debugger;	
				$scope.authClient.$login("password", {
				   email: $scope.email,
				   password: $scope.password
				}).then(function(user) {
				   console.log("Logged in as: ", user.uid);
				   $state.go('main');
				}, function(error) {
				   console.error("Login failed: ", error);
				});
		    }

  }]);
