'use strict';

/**
 * @ngdoc overview
 * @name devMtnAppApp
 * @description
 * # devMtnAppApp
 *
 * Main module of the application.
 */
angular.module('devMtnAppApp', ['firebase', 'ui.router', 'angularFileUpload', 'cloudinary']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: function($rootScope, $state, $firebase, $firebaseSimpleLogin, $scope) {
        var ref = new Firebase("https://devmtnapp.firebaseio.com/");
        $rootScope.authClient = $firebaseSimpleLogin(ref);
        $scope.authClient.$logout();
        $rootScope.loggedIn = false;
        $state.transitionTo('login');
      }
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })

    .state('secure', {
      abstract: true,
      template: '<div ui-view>',
      controller: 'SecureCtrl',
      resolve: {
        username: function (EnvironmentService){
          return EnvironmentService.getUserName();
        }
      }
    })
      .state('secure.main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'PeopleCtrl'
      })
      .state('secure.profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      
  });
