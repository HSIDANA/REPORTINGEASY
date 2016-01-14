angular.module('starter.chatdetailctrl', [])
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicHistory) {
	  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
  $scope.chat = Chats.get($stateParams.chatId);
});

