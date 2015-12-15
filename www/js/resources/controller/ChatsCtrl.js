angular.module('starter.chatsctrl', [])
.controller('ChatsCtrl', function($scope, Chats) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$scope.selected = function()
{
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
};
  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
});