'use strict';

/**
 * @ngdoc function
 * @name angularfirebaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularfirebaseApp
 */
angular.module('angularfirebaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
