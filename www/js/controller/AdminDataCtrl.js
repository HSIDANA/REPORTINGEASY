angular.module('starter.admindatactrl', [])

.controller('AdminDataCtrl', function($scope, $firebase, $ionicHistory) {

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
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


