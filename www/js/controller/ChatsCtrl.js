angular.module('starter.chatsctrl', [])
.controller('ChatsCtrl', function($scope, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $http.get('js/resources/incidents.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.incidents = incidents;


  });

  $http.get('js/resources/type.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.types = incidentType;

  });
  
      $http.get('js/resources/department.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.location = departments;

  });

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
});