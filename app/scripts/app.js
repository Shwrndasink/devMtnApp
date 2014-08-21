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

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'PeopleCtrl'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      
  });
