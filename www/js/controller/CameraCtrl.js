
angular.module('starter.cameractrl', ['ngCordova'])
.controller('CameraCtrl', function($scope, $cordovaCamera) {
    $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
	var options = {
    quality : 75,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,
    allowEdit : true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false
  };

  $cordovaCamera.getPicture(options).then(function(imageData) {
    // Success! Image data is here
    console.log(imageData);
    alert(imageData);
  }, function(err) {
    // An error occurred. Show a message to the user
    console.log(err);
    alert(err);
  });

});