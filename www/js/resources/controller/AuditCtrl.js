
angular.module('starter.auditctrl', [])

.controller('AuditCtrl', function($scope, $state, $location,$ionicPopup, $http, $ionicModal) {
  
  var maxDateTime = new Date();
  var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
  var minDateTime = new Date(minDate);
  $scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
  $scope.minDateTimeString = minDateTime.toISOString().split(".")[0];


});