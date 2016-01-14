angular.module('starter.adminctrl', [])

.controller('AdminCtrl', function($scope, $ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  });