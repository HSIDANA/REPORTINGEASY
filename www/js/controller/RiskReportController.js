angular.module('starter.riskreportcontroller', ['ionic-datepicker'])

.controller('RiskReportController', function($scope, $http) {

 $scope.roles = [
          {"id": 1, "name": "Manager", "assignable": true},
          {"id": 2, "name": "Developer", "assignable": true},
          {"id": 3, "name": "Reporter", "assignable": true}
    ];
    
    $scope.member = {roles: []};
    $scope.selected_items = [];

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

$(".dropdown dt a").on('click', function () {
          $(".dropdown dd ul").slideToggle('fast');
      });

      $(".dropdown dd ul li a").on('click', function () {
          $(".dropdown dd ul").hide();
      });

      function getSelectedValue(id) {
           return $("#" + id).find("dt a span.value").html();
      }

      $(document).bind('click', function (e) {
          var $clicked = $(e.target);
          if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
      });


      $('.mutliSelect input[type="checkbox"]').on('click', function () {
        
          var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
              title = $(this).val() + ",";
        
          if ($(this).is(':checked')) {
              var html = '<span title="' + title + '">' + title + '</span>';
              $('.multiSel').append(html);
              $(".hida").hide();
          } 
          else {
              $('span[title="' + title + '"]').remove();
              var ret = $(".hida");
              $('.dropdown dt a').append(ret);
              
          }
      });



  $http.get('js/resources/department.js').success(function (results) {

    //$scope.categories = results.categories;

    $scope.riskdepartments = departments;

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