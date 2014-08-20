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
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      
  });
