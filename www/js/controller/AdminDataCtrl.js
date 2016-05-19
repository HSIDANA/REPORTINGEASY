angular.module('starter.admindatactrl', [])

.controller('AdminDataCtrl', function($scope, $firebase, $ionicHistory, $location) {

  // Go back to the previous page
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  // Go to the login screen
   $scope.myHome = function() {
 $location.path( '/login');
  };
  //Connect to the database
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
   $scope.data = {};
   //gets managers from the database
    $scope.addManager = function() {
	  
	  var manager = $scope.data.manager;
console.log($scope.data.manager);
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
alert(manager);
$scope.manager = "";
var usersRef = ref.child("managers");
usersRef.push({

    name: manager,
  
  }
);
}
    //gets representatives from the database
    $scope.addRep = function() {
    var representative = $scope.data.representative;
console.log($scope.data.representative);
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
alert(representative);
$scope.representative = "";
var usersRef = ref.child("representative");
usersRef.push({

    name: representative
  }
);
}
  
  //gets incident types from the database
    $scope.addIncidentType = function() {
    var incident = $scope.data.incident;
console.log($scope.data.incident);
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
alert(incident);
$scope.incident = "";
var usersRef = ref.child("incident");
usersRef.push({
    name: incident
  }
);
}
  
  // gets list of ctegories from the database
    $scope.addCategories = function() {
    var category = $scope.data.category;
console.log($scope.data.category);
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
alert(category);
$scope.category = "";
var usersRef = ref.child("category");
usersRef.push({
    name: category
  }
);
}
  
  //gets list of departments from the database
    $scope.addDepartment = function() {
    var department = $scope.data.department;
console.log($scope.data.department);
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
alert(department);
$scope.department = "";
var usersRef = ref.child("department");
usersRef.push({

    name: department
  }
);
}

  //gets list of meeting types from the database
    $scope.addMeetingType = function() {
    
    var meeting = $scope.data.meeting;
console.log($scope.data.meeting);
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">
alert(meeting);
$scope.meeting = "";
var usersRef = ref.child("meeting");
usersRef.push({

    name: meeting
  }
);
}

});


