'use strict';

/**
 * @ngdoc overview
 * @name devMtnAppApp
 * @description
 * # devMtnAppApp
 *
 * Main module of the application.
 */
angular.module('devMtnAppApp', ['firebase', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SigunpCtrl'
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
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'PeopleCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
      })
      
  });
