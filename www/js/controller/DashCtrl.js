angular.module('starter.dashctrl', [])
.controller('DashCtrl', function($scope, $state, $location,$cordovaCamera, $ionicPopup, $http, $ionicModal, $firebase, $firebaseArray) {


 // $scope.myBirthday = new Date(1968, 10, 26);
 //    $scope.birthdayDatePicker.inputDate = $scope.myBirthday;
 //  function dateCallback(val) {
 //    if (val) {
 //      $scope.myBirthday = val;
 //    }
 //  }

 // $scope.datePicker.date = {startDate: null, endDate: null};	

	/* #### INIT #### */
	$http.get('js/resources/categories.js').success(function (results) {

		//$scope.categories = results.categories;

		$scope.categories = categories;

	});

	// $http.get('js/resources/managers.js').success(function (results) {

	// 	//$scope.categories = results.categories;

	// 	$scope.managers = managers;

	// 
 $scope.Initialize = function() {
 var ref = new Firebase("https://mysafe.firebaseio.com/category/");
var typeArray = $firebaseArray(ref);

typeArray.$loaded().then( function (data) {
	
            $scope.managers = data;
            alert(data);
        });
//  var name ;
//  var manager = [];
//  var k;
// // Retrieve new posts as they are added to our database
// ref.once("value", function(snapshot) {
// 	 snapshot.forEach(function(messageSnapshot) {
	  
// 	    k = messageSnapshot.key();
// 	   alert(k);

// 	   $scope.managers = messageSnapshot.child("name").val();



//   var nameSnapshot = snapshot.child("managers");
//   var name = nameSnapshot.val();

//   // name === { first: "Fred", last: "Flintstone"}
//   var firstNameSnapshot = snapshot.child("name/name");
//   var firstName = firstNameSnapshot.val();
//   // firstName === "Fred"
// $scope.managers = data;


  // age === null (because there is no "age" child in the data snapshot)
  // });
	
// });


}


		$http.get('js/resources/department.js').success(function (results) {

		//$scope.categories = results.categories;
	
		$scope.departments = departments;

	});

	// resetReport();
	// getCurrentLocation();
	
	//Make max date string:
	var maxDateTime = new Date();
	var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
	var minDateTime = new Date(minDate);
	$scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
	$scope.minDateTimeString = minDateTime.toISOString().split(".")[0];

});
	// $ionicModal.fromTemplateUrl('templates/map-modal.html', {
	// 	scope: $scope,
	// 	animation: 'slide-in-up'
	// }).then(function(modal) {
	// 	$scope.modal = modal
	// })  




	//Conditionally display image - stops blank area on screen
	// $scope.displayImage = function () {
	// 	if ($scope.report.imgURI) {
	// 		return true;
	// 	}
	// 	return false;
	// }


	//Update the subcategory
	// $scope.selected = function(category) {
	// 	var cat = $scope.report.category;
	// 	console.log(cat);
	// 	var obj = JSON.parse(cat);
	// 	$scope.subcategories = obj.subcategories;
	// }


	//Submit the incident
	// $scope.submit = function() {

	// 	//Check to make sure all fields (except camera) are filled out.
	// 	if (($scope.report.category == null) || ($scope.report.subcategory == null) || ($scope.report.coords == null) || ($scope.report.date == null) || ($scope.report.description == null)) {
	// 		var alertPopup = $ionicPopup.alert({
	// 			title: 'Error',
	// 			template: "Please fill out all the fields"
	// 		});
	// 		return;
	// 	}

	// 	//Convert to incidentWrapper format, and submit!
	// 	incidentWrapper = {};
	// 	incident = {};
	// 	incident.incidentDescription = $scope.report.description;
	// 	incident.incidentDate = $scope.report.date.getTime();

	// 	incidentLocation = {};
	// 	incidentLocation.latitude = $scope.report.coords.latitude;
	// 	incidentLocation.longitude = $scope.report.coords.longitude;


	// 	if ($scope.report.media_id) {
	// 		console.log("Media id: " + $scope.report.media_id);
	// 		media = {};
	// 		media.media_id = $scope.report.media_id;
	// 		incidentWrapper.media = media;
	// 	}

	// 	incidentWrapper.incident = incident;
	// 	incidentWrapper.location = incidentLocation;
	// 	incidentWrapper.catID = JSON.parse($scope.report.category).categoryID;
	// 	incidentWrapper.subcatID = JSON.parse($scope.report.subcategory).subcategoryID;

	// 	$scope.incidentWrapper = incidentWrapper;

	// 	console.log("Submitting incident: " + JSON.stringify(incidentWrapper));

	// 	ReportService.submit($scope.incidentWrapper)
	// 	.then(function(response) {
	// 		console.log("Controller success: " + JSON.stringify(response.data));

	// 			//Check to see if duplicates exist
	// 			if (response.data.parentIncident) {
	// 				//We found a duplicate! Display popup
	// 				$scope.item = response.data.parentIncident;

	// 				$ionicPopup.show({
	// 					templateUrl: "/templates/incident-card.html",
	// 					title: 'Duplicate Report?',
	// 					subTitle: 'We found a report similar to yours!',
	// 					scope: $scope,
	// 					buttons: [
	// 					{ text: 'Cancel' },
	// 					{
	// 						text: '<b>Yes</b>',
	// 						type: 'button-positive',
	// 						onTap: function() {onPopupSuccess(response);}
	// 					}]
	// 				});
	// 			}
	// 			else {
	// 				displayPopup(true);
	// 			}
	// 			//Clear fields
	// 			resetReport();

	// 		},
	// 		function(data) {
	// 			displayPopup(false);
	// 		});
	// };

	/* ##### Location Methods ##### */

	// $scope.ShowLocation = function(){
	// 	getCurrentLocation();
	// };

	//Get the current location
	// function getCurrentLocation() {
	// 	navigator.geolocation.getCurrentPosition(
	// 		function(position) {
	// 			console.log("Getting location!");
	// 			if (position.coords){
	// 				$scope.report.coords = position.coords;
	// 			}
	// 			if (constants.debug) {
	// 				if (!$scope.report.coords) {
	// 					console.log("Could not get location! Setting default");
	// 					coords = {};
	// 					coords.latitude = -34.9282402;
	// 					coords.longitude = 138.60090879999998;
	// 					$scope.report.coords = coords;
	// 				}
	// 			}

	// 			if ($scope.map) {
	// 				//Center the map!
	// 				var center = new google.maps.LatLng($scope.report.coords.latitude, $scope.report.coords.longitude);
	// 				$scope.map.setCenter(center);
	// 				$scope.modalMap.setCenter(center);
	// 			}
	// 		},
	// 		function(err) {
	// 			console.log("Error getting location: " + err);
	// 		});
	// }


	// $scope.imageLocation = function() {
	// 	//TODO: Get geolocation from image

	// }


	/* ##### Image Upload ##### */

	// $scope.ShowPictures = function(){
	// 	//Deal with library vs camera
	// 	// ReportService.uploadImage($scope.imageData);
	// 	// return;
	// 	var cameraSheet = $ionicActionSheet.show({
	// 		buttons: 
	// 		[
	// 		{ text: 'Library'},
	// 		{ text: 'Camera'}
	// 		],
	// 		cancelText: 'Cancel',
	// 		cancel: function() {
 //          		// add cancel code..
 //          	},
 //          	buttonClicked: function(index) {
 //          		//Ask user for library or camera
 //          		if (index === 0) {
 //          			presentCamera(Camera.PictureSourceType.PHOTOLIBRARY);
 //          		}
 //          		else {
 //          			presentCamera(Camera.PictureSourceType.CAMERA);
 //          		}
 //          		return true;
 //          	}
 //          })
	// };


	// var mapint = 0;
	// $scope.$on('mapInitialized', function(event, map) {
	// 	//Filter by class!
	// 	if(map.class == "map-small") {
	// 		$scope.map = map;
	// 	}
	// 	if(map.class == "map-modal") {
	// 		$scope.modalMap = map;
	// 	}
	// 	mapint++
	// 	console.log("Map initialized: " + mapint);
	// 	//I think we are running into issues- with multiple maps.
	// });

	// presentCamera = function (cameraType) {

	// 	var options = { 
	// 		quality : 75, 
	// 		destinationType : Camera.DestinationType.FILE_URI, 
	// 		sourceType : cameraType, 
	// 		allowEdit : false,
	// 		encodingType: Camera.EncodingType.JPEG,
	// 		targetWidth: 500,
	// 		targetHeight: 500,
	// 		popoverOptions: CameraPopoverOptions,
	// 		saveToPhotoAlbum: false
	// 	};

	// 	$cordovaCamera.getPicture(options).then(function(fileURL) {
	// 		//This doesn't work when using --livereload
	// 		$scope.report.imgURI = fileURL;

	// 		//Do we need to decode the file? - maybe for android?
	// 		// var convertedFileURL = $base64.decode(fileURL);
	// 		console.log("Posting image: " + fileURL);

	// 		//Upload the image here!
	// 		ReportService.uploadImage(fileURL)
	// 		.then(function(data) {
	// 			//This isn't returning valid JSON!!!! ARGGGGG!!!
	// 			console.log("Controller success: " + data.response);
	// 			$scope.report.media_id = data.response
	// 			console.log("media id: " + $scope.report.media_id);


	// 		},
	// 		function(data) {
	// 			console.log("contorller Error");
	// 			//Display error message
	// 			var alertPopup = $ionicPopup.alert({
	// 				title: 'Error!',
	// 				template: "Could not upload your Media."
	// 			});
	// 		});

	// 	}, function(err) {
 //            //TODO: Display Error
 //        });
	// };

	// function convertImgToBase64URL(url, callback, outputFormat){
	// 	var img = new Image();
	// 	img.crossOrigin = 'Anonymous';
	// 	img.onload = function(){
	// 		var canvas = document.createElement('CANVAS'),
	// 		ctx = canvas.getContext('2d'), dataURL;
	// 		canvas.height = this.height;
	// 		canvas.width = this.width;
	// 		ctx.drawImage(this, 0, 0);
	// 		dataURL = canvas.toDataURL(outputFormat);
	// 		callback(dataURL);
	// 		canvas = null; 
	// 	};
	// 	img.src = url;
	// }


	// function createFileEntry(fileURI) {
	// 	window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
	// }


	// function copyFile(fileEntry) {
	// 	var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);

	// 	window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
	// 		fileEntry.copyTo(
	// 			fileSystem2,
	// 			name,
	// 			onCopySuccess,
	// 			fail
	// 			);
	// 	},
	// 	fail);
	// }

	// function onCopySuccess(entry) {
	// 	$scope.$apply(function () {
	// 		console.log("Copy success: " + JSON.stringify(entry));

	// 		$scope.report.imgURI = urlForImage(entry.nativeURL);
	// 		console.log("Img uri: " + $scope.report.imgURI);
	// 	});
	// }

	// function fail(error) {
	// 	console.log("fail: " + error.code);
	// }

	// function urlForImage (imageName) {
	// 	var name = imageName.substr(imageName.lastIndexOf('/') + 1);
	// 	var trueOrigin = cordova.file.dataDirectory + name;
	// 	return trueOrigin;
	// }



	// //Present action sheet, then clear fields
	// $scope.clear = function() {
	// 	var clearSheet = $ionicActionSheet.show({
	// 		titleText: 'Clear all fields?',
	// 		destructiveText: 'Clear',
	// 		cancelText: 'Cancel',
	// 		cancel: function() {
 //          		// do nothing?
 //          	},
 //          	destructiveButtonClicked: function(index) {
 //          		resetReport();
 //          		return true;
 //          	}
 //          });
	// }

	// /* ##### Modal Methods ##### */

	// $scope.openModal = function() {
	// 	$scope.modal.show()
	// 	$scope.modal.map = angular.element(document.getElementById('map'));

	// }

	// $scope.closeModal = function(center) {
	// 	console.log("Data: " + center);
	// 	if (center != null) {
	// 		//Assign center, and move map
	// 		//TODO: Update the model!
	// 		$scope.map.setCenter(center);
	// 	}
	// 	$scope.modal.hide();
	// }

	// $scope.$on('$destroy', function() {
	// 	$scope.modal.remove();
	// });



	// /* ##### Popup Methods ##### */

	// function displayPopup(success) {
	// 	if (success) {
	// 		//Display success message
	// 		var alertPopup = $ionicPopup.alert({
	// 			title: 'Thanks!',
	// 			template: "Your incident has been reported."
	// 		});
	// 	} 
	// 	else {
	// 		console.log("controller Error");
	// 		var alertPopup = $ionicPopup.alert({
	// 			title: 'Error!',
	// 			template: "Something went wrong..."
	// 		});
	// 	}
	// }


	// function onPopupSuccess(response) {
	// 	ReportService.saveDuplicate(response.data.parentIncident.incident_id, response.data.otherIncident.incident_id)
	// 	.then(function(response){
	// 		displayPopup(true);
	// 		resetReport();

	// 	}, function(err) {
	// 		displayPopup(false);
	// 	});
	// }


	// /* ##### Utility Methods ##### */

	// //Redirect to Tab root on click
	// $scope.onTabSelected = function() {
	// 	$state.go('tab.report');
	// }

	// function resetReport() {
	// 	//Persist the location (if we already have it)
	// 	if ($scope.report) {
	// 		if ($scope.report.coords != undefined) {
	// 			var coords = $scope.report.coords;
	// 		}
	// 	}
	// 	//Init the object
	// 	$scope.currentDate = new Date();
	// 	$scope.datePickerCallback = function (val) {
	// 		if(typeof(val)==='undefined'){		
	// 			console.log('Date not selected');
	// 		}else{
	// 			console.log('Selected date is : ', val);
	// 		}
	// 	};
		
	// 	$scope.report = {}
	// 	$scope.date= new Date();
	// 	var newDate = new Date(); 
	// 	var convertedDateString = newDate.toLocaleString();
	// 	var convertedDate = new Date(convertedDateString);
	// 	$scope.report.date = convertedDate;
	// 	$scope.categories = categories;
	// 	$scope.report.category = {};
	// 	if (coords) {
	// 		$scope.report.coords = coords;
	// 	}
	// }

	// //Conditionally display image - stops blank area on screen
	// $scope.displayImage = function () {
	// 	if ($scope.report.imgURI) {
	// 		return true;
	// 	}
	// 	return false;
	// }



