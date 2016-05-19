angular.module('starter.hazardctrl', ['ionic-datepicker'])

.controller('HazardCtrl', function($scope, $http, $ionicHistory, $cordovaCamera, $location, $cordovaEmailComposer, Camera, $firebase, $firebaseArray) {
  
  // Goback to the previous page

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  // Go to the home page/login screen

   $scope.myHome = function() {
  $location.path( '/login');
  };
$scope.sendEmail = function() {
        // 1
        var bodyText = "<h2>Look at this images!</h2>";
   
              window.plugin.email.open({
                             to:      ['s.harshita.89@gmail.com'],
                             cc:      ['hsingh1.andrew@cmu.edu'],
                             bcc:     ['hsingh1@andrew.cmu.edu'],
                             subject: 'Greetings',
                             body:    'How are you? Nice greetings from Leipzig'
                             });
            // 4
    
        };

         $scope.InitializeHazard = function() {
 var ref = new Firebase("https://mysafe.firebaseio.com/managers/");
var typeArray = $firebaseArray(ref);

typeArray.$loaded().then( function (data) {
  
            $scope.managers = data;
        
        });
}

  $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }


  //         $scope.getPhoto = function() {
  //   Camera.getPicture().then(function(imageURI) {
  //     console.log(imageURI);
  //   }, function(err) {
  //     console.err(err);
  //   });
  // };

 $scope.sendFeedback= function() {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
              alert("found");
                console.log("Response -> " + result);
            }, 
            "Feedback for your App", // Subject
            "",                      // Body
            ["s.harshita.89@gmail.com"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    };

/**
 * Sends an email using Email composer with attachments plugin and using
 * parameter email.
 *
 * @param email
 */
// $scope.sendEmail = function (email) {
//   alert("h1");
//   if (window.plugins.emailComposer) { //check if plugin exists
// alert("h");
//     window.plugins.emailComposer.showEmailComposerWithCallback(function (result) {
//         //console.log("Email sent successfully");
//       },

//       null,        // Subject
//       null,        // Body
//       [email],     // To (Email to send)
//       null,        // CC
//       null,        // BCC
//       false,       // isHTML
//       null,        // Attachments
//       null);       // Attachment Data
//   }

// }

// $scope.sendEmail = function() {
//         // 1
     
             
//             // 4
//             window.plugin.email.open({
//                 to:          ["s.harshita.89@gmail.com"], // email addresses for TO field
//                 cc:          null, // email addresses for CC field
//                 bcc:         null, // email addresses for BCC field
//                 attachments: null, // file paths or base64 data streams
//                 subject:    "Just some images", // subject of the email
//                 body:       "HI", // email body (for HTML, set isHtml to true)
//                 isHtml:    true, // indicats if the body is HTML or plain text
//             }, function () {
//                 console.log('email view dismissed');
//             },
//             this);    
//         }
// };
 
/*
  Dropdown with Multiple checkbox select with jQuery - May 27, 2013
  (c) 2013 @ElmahdiMahmoud
  license: http://www.opensource.org/licenses/mit-license.php
*/ 


/*
  Dropdown with Multiple checkbox select with jQuery - May 27, 2013
  (c) 2013 @ElmahdiMahmoud
  license: http://www.opensource.org/licenses/mit-license.php
*/ 

  $http.get('js/resources/department.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.plant = departments;

  });



  $http.get('js/resources/actionType.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.actiontype = actionType;

  });
    $http.get('js/resources/managers.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.riskmanagers = managers;

  });
      $http.get('js/resources/categories.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.riskcategories = categories;

  });
          $scope.selected_items = [];

    $scope.datepickerObject = {
   //Optional
      inputDate: new Date(),  //Optional
      templateType: 'popup', //Optional
   setLabel: 'Set',  //Optional
      setButtonType : 'button-assertive',
 //Optional
      callback: function (val) {  //Mandatory
  datePickerCallback(val);
      }//Optional
    };
     // $scope.datepickerObject.inputDate = new Date();

    var datePickerCallback = function (val) {
  if (typeof(val) === 'undefined') {
    console.log('No date selected');
  } else {
    console.log('Selected date is : ', val)
    $scope.datepickerObject.inputDate = val; 
  }
};

    $scope.datepickerObject1 = {
   //Optional
      inputDate: new Date(),  //Optional
      templateType: 'popup', //Optional
   	setLabel: 'Set',  //Optional
      setButtonType : 'button-assertive',
 //Optional
      callback: function (val) {  //Mandatory
  datePickerCallback1(val);
      }//Optional
    };
     // $scope.datepickerObject.inputDate = new Date();

    var datePickerCallback1= function (val) {
  if (typeof(val) === 'undefined') {
    console.log('No date selected');
  } else {
    console.log('Selected date is : ', val)
    $scope.datepickerObject1.inputDate = val; 
  }
};
    $scope.datepickerObject2 = {
   //Optional
      inputDate: new Date(),  //Optional
      templateType: 'popup', //Optional
    setLabel: 'Set',  //Optional
      setButtonType : 'button-assertive',
 //Optional
      callback: function (val) {  //Mandatory
  datePickerCallback2(val);
      }//Optional
    };
     // $scope.datepickerObject.inputDate = new Date();

    var datePickerCallback2= function (val) {
  if (typeof(val) === 'undefined') {
    console.log('No date selected');
  } else {
    console.log('Selected date is : ', val)
    $scope.datepickerObject2.inputDate = val; 
  }
};
    $scope.datepickerObject3 = {
   //Optional
      inputDate: new Date(),  //Optional
      templateType: 'popup', //Optional
    setLabel: 'Set',  //Optional
      setButtonType : 'button-assertive',
 //Optional
      callback: function (val) {  //Mandatory
  datePickerCallback3(val);
      }//Optional
    };
     // $scope.datepickerObject.inputDate = new Date();

    var datePickerCallback3= function (val) {
  if (typeof(val) === 'undefined') {
    console.log('No date selected');
  } else {
    console.log('Selected date is : ', val)
    $scope.datepickerObject3.inputDate = val; 
  }
};



});