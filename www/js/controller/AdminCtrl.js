angular.module('starter.adminctrl', [])

.controller('AdminCtrl', function($scope, $ionicHistory, $location) {
	// Go back to the previous page
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  	// Go to the login screen
   $scope.myHome = function() {
 $location.path( '/login');
  };
  });