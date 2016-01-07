// inspired by https://www.airpair.com/ionic-framework/posts/ionic-firebase-camera-app
angular.module('starter.chatsctrl', [])
.controller('ChatsCtrl', function($scope, $http,$firebaseArray, $cordovaCamera, $ionicHistory, $ionicActionSheet ) {

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
        //    $scope.upload = function() {
        // var options = {
        //     quality : 75,
        //     destinationType : Camera.DestinationType.DATA_URL,
        //     sourceType : Camera.PictureSourceType.CAMERA,
        //     allowEdit : true,
        //     encodingType: Camera.EncodingType.JPEG,
        //     popoverOptions: CameraPopoverOptions,
        //     targetWidth: 500,
        //     targetHeight: 500,
        //     saveToPhotoAlbum: false
        // };


  $scope.upload = function () {
    alert("h");
    var options = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 1000,
      targetHeight: 1000,
      allowEdit: true
    };
    $cordovaCamera.getPicture(options)
      .then(function (imageURI) {
        $scope.postData.imageUri = imageURI;
      }, function (error) {
        console.log(error);
      })
  };


  $scope.upload1 = function(){
    //Deal with library vs camera
    // ReportService.uploadImage($scope.imageData);
    // return;
    var cameraSheet = $ionicActionSheet.show({
      buttons: 
      [
      { text: 'Library'},
      { text: 'Camera'}
      ],
      cancelText: 'Cancel',
      cancel: function() {
              // add cancel code..
            },
            buttonClicked: function(index) {
              //Ask user for library or camera
              if (index === 0) {
                alert("in1");
                presentCamera(Camera.PictureSourceType.PHOTOLIBRARY);
                alert(err);
              }
              else {
                alert("in2");
                presentCamera(Camera.PictureSourceType.CAMERA);
              }
              return true;
            }
          })
  };
 
  presentCamera = function (cameraType) {
alert("in");
    var options = { 
      quality : 75, 
      destinationType : Camera.DestinationType.FILE_URI, 
      sourceType : cameraType, 
      allowEdit : false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

  
  };

//         $scope.upload = function(){
//     Camera.getPicture({
//         sourceType:0,       //photo album,
//         destinationType:1,  //file URI
//         saveToPhotoAlbum:false,
//         correctOrientation:true
//     }).then(function(imageURI) {
//         $scope.imageURI = imageURI; //THIS ONLY WORKS SOMETIMES
//     }, function(err) {
//         alert('An error has occured');
//     });
// };
    //     $cordovaCamera.getPicture(options).then(function(imageData) {
    //         syncArray.$add({image: imageData}).then(function() {
    //             alert("Image has been uploaded");
    //         });
    //     }, function(error) {
    //         console.error(error);
    //     });
    // }

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