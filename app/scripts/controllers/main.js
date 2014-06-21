'use strict';

/**
 * @ngdoc function
 * @name angularfirebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfirebaseApp
 */
angular.module('angularfirebaseApp')
  .controller('MainCtrl', function ($scope, Person) {
    $scope.add = function() {
    	var save = Person.$add({
    		firstName: $scope.firstName,
    		lastName: $scope.lastName
    	});

		$scope.firstName = '';
		$scope.lastName = '';

    	if(save) {
    		alert('saved successfully');
    	} else {
    		alert('something went wrong');
    	}
    }

    $scope.remove = function(id) {
        Person.$remove(id);
    }

    $scope.list = Person;
  })
  .controller('EditCtrl', function ($scope, $location, $routeParams, $firebase, fbURL) {
    var personURL = fbURL + $routeParams.id;
    $scope.person = $firebase(new Firebase(personURL));

    $scope.edit = function() {
        $scope.person.$save();
        $location.path('/');
    }
  });
