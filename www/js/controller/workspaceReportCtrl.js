angular.module('starter.workspacereportctrl', ['ionic-datepicker','ngCsv','ngSanitize'])

.controller('workspaceReportCtrl', function($scope, $http, $firebaseArray,$timeout, $filter) {



//               $scope.exportToExcel=function(tableId){
// alert(tableId);

//                // ex: '#my-table'
//             $scope.exportHref=Excel.tableToExcel(tableId,'sheet name');
//             $timeout(function(){location.href=$scope.fileData.exportHref;},100); // trigger download
//         }

 var ref = new Firebase("https://mysafe.firebaseio.com/workspace/");
   ref.authWithPassword({
  "email": "s.harshita.89@gmail.com",
  "password": "Harshita24"
}, function(error, authData) {
  if (error) {
    alert("Login Failed!", error);
  } else {
    // alert("Authenticated successfully with payload:", authData);
  }
});

  
    $scope.plants = [];
    $scope.Initialize4 = function() {

 var ref = new Firebase("https://mysafe.firebaseio.com/department/");
var users = $firebaseArray(ref);
users.$loaded()
    .then(function(){
        angular.forEach(users, function(user) {
            $scope.plants.push(user.name);
        })
    });
// typeArray.$loaded().then( function (data) {
  
//             $scope.department = data;
//             var a = $scope.department.name ;
//             alert(a);
//         });
};

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
//http://stackoverflow.com/questions/26215355/creating-a-table-in-ionic

    $scope.data = {};
    var arr = [];
        var arr1 = [];
    var result = [];
    $scope.submit = function() {
    var date =   $scope.datepickerObject.inputDate;
    var date1 =  $scope.datepickerObject1.inputDate;
    // alert(date);
    var mn = date.getMonth();
    // alert(mn);

    var dt = date.getDate();
    // alert(dt);
    var yr = date.getFullYear();
    // alert(yr);
    var dateWS = date.toString();

    // alert(date1);
       var plnt = $scope.data.option;  
// alert(plnt);
 
$scope.ctrl = [];
$scope.key = [];


 var ref = new Firebase("https://mysafe.firebaseio.com/workspace/");
var users = $firebaseArray(ref);
users.$loaded()
    .then(function(){
         angular.forEach(users, function(user) {
           if (user.department == plnt) 
           {
            var dt = user.date+"/"+(user.month+1)+"/"+user.year;
            $scope.ctrl.push({INSPECTOR : user.description, KEY : user.$id, PLANT: user.department, ACTIONS : user.actions, DATE : dt});
    
            arr.push(user.description);
            arr1.push(user.$id);
           }
         })
    });

     };

var array = [];
$scope.saveAsXlsx = function () {
  for(var i=0;i<arr.length;i++) {

array[i] = arr[i].toString();
// alert(array[i]);
}
   result = [ 
  { id: '1', name: array[0], status: '123' }, 
  { id: '2', name: array[1], status: '323'}
];
   alasql('SELECT * INTO XLSX("output.xlsx",{headers:true}) FROM ?',[$scope.ctrl]);
}


});