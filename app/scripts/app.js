'use strict';

/**
 * @ngdoc overview
 * @name angularfirebaseApp
 * @description
 * # angularfirebaseApp
 *
 * Main module of the application.
 */
angular
  .module('angularfirebaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .value('fbURL', 'https://angularifictest.firebaseio.com/')
  .factory('Person', function (fbURL, $firebase) {
    return $firebase(new Firebase(fbURL));
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
