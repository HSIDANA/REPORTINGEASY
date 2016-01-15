angular.module('starter.actioncontroller', ['ionic-datepicker'])

.controller('ActionCtrl', function($scope, $http, $ionicHistory, $location) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

   $scope.myHome = function() {
 $location.path( '/login');
  };

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