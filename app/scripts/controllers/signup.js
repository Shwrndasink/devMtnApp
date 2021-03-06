'use strict';

/**
 * @ngdoc function
 * @name devMtnAppApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the devMtnAppApp
 */
angular.module('devMtnAppApp')
  .controller('SignupCtrl', function($rootScope, $scope, $firebase, $firebaseSimpleLogin, $state) {
    var ref = new Firebase("https://devmtnapp.firebaseio.com/");
    $scope.user = {
    	email: Math.random() * 10000 + '@email.com',
    	username: 'this',
    	occupation: 'job',
    	skills: 'none',
    	github: 'n/a',

    };
    $scope.password = 'this';


     // create an AngularFire reference to the data
    var sync = $firebase(ref);

    // download the data into a local object
    $scope.data = sync.$asObject();
    $rootScope.authClient = $firebaseSimpleLogin(ref);
    $scope.signup = function(newUser, password){
		$scope.authClient.$createUser(newUser.email, password)
			.then(function(user) {
				var userObject = $firebase(new Firebase("https://devmtnapp.firebaseio.com/users/" + user.id)).$asObject();

				userObject.email = newUser.email;
				userObject.username = newUser.username;
				userObject.occupation = newUser.occupation;
				userObject.skills = newUser.skills;
				userObject.github = newUser.github;
				

				userObject.$save().then(function () {
					$scope.authClient.$login("password", {
					   email: newUser.email,
					   password: password
					}).then(function(user) {
						$rootScope.loggedIn = true;
					   console.log("Logged in as: ", user.uid);
					   $state.transitionTo('secure.main');
					   $scope.loggedIn = true;
					}, function(error) {
					   console.error("Login failed: ", error);
					});
				}, function (error) {
					console.warn(error);
				});

				
			}, function(error){
				console.log('There was an error on signup ', error);
			})
    }

    // $scope.authClient.logout();

 });
