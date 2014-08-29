'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('SignupCtrl', ["$rootScope", "$scope", "$firebase", "$firebaseSimpleLogin", "$state", function($rootScope, $scope, $firebase, $firebaseSimpleLogin, $state) {
    var ref = new Firebase("https://devmtnapp.firebaseio.com/");
    $scope.user = {};

     // create an AngularFire reference to the data
    var sync = $firebase(ref);

    // download the data into a local object
    $scope.data = sync.$asObject();
    $rootScope.authClient = $firebaseSimpleLogin(ref);
    $scope.signup = function(){
		$scope.authClient.$createUser($scope.user.email, $scope.password)
			.then(function(user){
				$scope.user.uid = user.uid;
				var list = $firebase(new Firebase("https://devmtnapp.firebaseio.com/users")).$asArray();;
				list.$add($scope.user);
				$scope.authClient.$login("password", {
				   email: $scope.user.email,
				   password: $scope.password
				}).then(function(user) {
				   console.log("Logged in as: ", user.uid);
				   $state.go('main');
				}, function(error) {
				   console.error("Login failed: ", error);
				});
			}, function(error){
				console.log('There was an error on signup ', error);
			})
    }

 }]);
