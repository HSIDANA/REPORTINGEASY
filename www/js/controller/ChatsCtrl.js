angular.module('starter.chatsctrl', [])
.controller('ChatsCtrl', function($scope, $state, $location) {
  //Init the object
  $scope.report = {}

  //TODO: Load all of the categories and subcategories
  //TODO: Handle image upload
  //TODO: Handle Location
  //TODO: Handle time


  $scope.submit = function() {
    //TODO: make sure fields are all filled out and valid first!
    
    ReportService.submit($scope.report)
      .then(function(data) {
        console.log("Controller success: " + data);
        //Display success message
      },
      function(data) {
        console.log("contorller Error");
        //Display error message
      });
  };

  //Redirect to Tab root on click
  $scope.onTabSelected = function() {
      $state.go('tab.report');
  }

$scope.selectPhoto = function(){
    Camera.getPicture({
        sourceType:0,       //photo album,
        destinationType:1,  //file URI
        saveToPhotoAlbum:false,
        correctOrientation:true
    }).then(function(imageURI) {
        $scope.imageURI = imageURI; //THIS ONLY WORKS SOMETIMES
    }, function(err) {
        alert('An error has occured');
    });
};
    $scope.ImageURI = 'content://media/external/images/media/17';

            function UploadPicture(imageURI) {

                    $scope.PicSourece  = document.getElementById('smallimage');


                    if (imageURI.substring(0,21)=="content://com.android") {
                        var photo_split=imageURI.split("%3A");
                        imageURI="content://media/external/images/media/"+photo_split[1];

                    }
                    $scope.ImageURI =  imageURI;
                    $scope.PicSourece.src = $scope.ImageURI;
                    $scope.apply();



            }

            $scope.ShowPictures = function(){
                alert("hh2");
                navigator.camera.getPicture(UploadPicture, function(message) {
                        alert('get picture failed');
                        },{
                        quality: 50,
                        destinationType: navigator.camera.DestinationType.FILE_URI,
                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }

                );
                $scope.ImageURI = 'Vamsidhar';
            };


});

