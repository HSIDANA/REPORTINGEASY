angular.module('starter.workplacectrl', [])

.controller('WorkPlaceCtrl', function($scope, $firebaseArray, $ionicHistory, $ionicActionSheet, $location) {
// alert("h");
   $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
   $scope.myHome = function() {
 $location.path( '/login');
  };
    var d = new Date() - 1000 * 60 * 60 * 24 * 5;
  // var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;

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
   	// 
    $scope.departments = [];
 $scope.Initialize3 = function() {

 var ref = new Firebase("https://mysafe.firebaseio.com/department/");
var users = $firebaseArray(ref);
users.$loaded()
    .then(function(){
        angular.forEach(users, function(user) {
            $scope.departments.push(user.name);
        })
    });
// typeArray.$loaded().then( function (data) {
	
//             $scope.department = data;
//             var a = $scope.department.name ;
//             alert(a);
//         });
};
$scope.choice = [{text: "Option Added", value: "added", selected: false},
{text: "Option not added", value: "no", selected: true}];
var val = "";
  $scope.choiceChanged = function(item) {
            // alert(item.value);
           if (item.val == "added")
           {
            val = "required";
           }
           else {val = "not required";}

        };

   $scope.data = {};



    $scope.submit = function() {

// var choice = [];
   // Show the action sheet
//    var hideSheet = $ionicActionSheet.show({
//      buttons: [
//        { text: 'Action Required' },
//        { text: 'No Action required' }
//      ],
//      cancel: function() {
//           // add cancel code..
//         },
//      buttonClicked: function(index) {
//       alert(index);
//       if (index == 0)
// {
//   choice = "true";
// }
// if (index == 1)
// {
//    choice = "false"; 
// }
//        return true;
//      }
//    });


// alert(ref);
	  var date = $scope.data.date ;
    var m = date.getMonth();
    // alert(m);
    var d = date.getDate();
    // alert(d);
    var y = date.getFullYear();
    // alert(y);
    var dateEnter = date.toString();
      // var dep = $scope.data.department;
 
       var des = $scope.data.description;
  
       var dept = $scope.data.optionSelected;
	  // alert(date);
        // alert(des);
        //     alert(dept);
        // alert(choice);
        // alert(val);
	  $scope.data.date = "";
    // $scope.data.description = "";
    $scope.data.department = "";
    $scope.data.optionSelected = "" ;
     $scope.data.description = "" ;

ref.push({
    description : des,
    month: m,
    date: d,
    year: y,
    department :dept,
    actions: val,
    // choice : choice,

  }
);



	  
//            // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
// alert(description);
// $scope.data.description = "";
// var usersRef = ref.child("description");
// usersRef.push({

//     name: description

//   }
// );
// 	  $scope.data.department = $scope.data.department;
	
//            // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
// alert(dep);
// $scope.data.department = "";
// var usersRef = ref.child("department");
// usersRef.push({

//     department: department
//   }
// );


};

});