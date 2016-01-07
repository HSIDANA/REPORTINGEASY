angular.module('starter.meetingsctrl', [])
.controller('MeetingsCtrl', function($scope, $location,$ionicPopup, $http) {


  $http.get('js/resources/department.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.plant = departments;

  });

  $http.get('js/resources/meetingType.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.meetingTypes = meetingType;

  });



        // Execute SELECT statement to load message from database.

  var maxDateTime = new Date();
  var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
  var minDateTime = new Date(minDate);
  $scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
  $scope.minDateTimeString = minDateTime.toISOString().split(".")[0];



});