angular.module('starter.chatsctrl', [])
.controller('ChatsCtrl', function($scope, $http,$firebaseArray, $ionicHistory ) {

$ionicHistory.clearHistory();

    $scope.images = [];
 var ref = new Firebase("https://mysafe.firebaseio.com/");
   ref.authWithPassword({
  "email": "s.harshita.89@gmail.com",
  "password": "Harshita24"
}, function(error, authData) {
  if (error) {
   // alert("Login Failed!", error);
  } else {
    //alert("Authenticated successfully with payload:", authData);
  }
});
 $scope.Initialize1 = function() {
  alert("here");
    var syncArray = ref.child("images");
    alert(syncArray);
        $scope.images = syncArray;
      }
           $scope.upload = function() {
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
            syncArray.$add({image: imageData}).then(function() {
                alert("Image has been uploaded");
            });
        }, function(error) {
            console.error(error);
        });
    }

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