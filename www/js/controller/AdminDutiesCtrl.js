//http://stackoverflow.com/questions/28331595/trying-to-get-ng-csv-to-work-with-firebase - to export as csv

angular.module('starter.admindutiesctrl', [])

.controller('AdminDutiesCtrl', function($scope, $ionicHistory) {
	  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.settings = {
    enableFriends: true
  };
});