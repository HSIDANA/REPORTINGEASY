angular.module('starter.adminctrl', [])

.controller('AdminCtrl', function($scope, $ionicHistory, $location) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

   $scope.myHome = function() {
 $location.path( '/login');
  };
  });