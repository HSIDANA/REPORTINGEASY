angular.module('starter.meetingsctrl', [])
.controller('MeetingsCtrl', function($scope, $state, $location,$ionicPopup,$ngCordova,$cordovaSQLite, $http, $ionicModal) {


$http.get('js/resources/categories.js').success(function (results) {

    $scope.categories = results;
    //alert($scope.categories);
    // $scope.report = {}
//     $scope.date= new Date();
//     var newDate = new Date(); 
//     var convertedDateString = newDate.toLocaleString();
//     var convertedDate = new Date(convertedDateString);
//     $scope.report.date = convertedDate;
//     $scope.categories = categories;
//     $scope.report.category = {};
  });



        // Execute SELECT statement to load message from database.

  var maxDateTime = new Date();
  var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
  var minDateTime = new Date(minDate);
  $scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
  $scope.minDateTimeString = minDateTime.toISOString().split(".")[0];

  $http.get('js/resources/categories.json').success(function (results) {
    $scope.categories = results.categories;

$scope.report = {}
    $scope.date= new Date();
    var newDate = new Date(); 
    var convertedDateString = newDate.toLocaleString();
    var convertedDate = new Date(convertedDateString);
    $scope.report.date = convertedDate;
    $scope.categories = categories;
    $scope.report.category = {};

  });

});