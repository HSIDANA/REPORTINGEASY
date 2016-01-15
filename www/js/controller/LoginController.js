angular.module('starter.logincontroller', [])
.controller('LoginController', function($scope, $location, $ionicPopup, $ionicHistory)
{
  
      $scope.data = {};
$ionicHistory.clearHistory();
$scope.pageTitle = "<img src=\"http://mt.schneider-electric.be/HTML/images/Logo_Schneider-LifeIsOn.jpg\">";
   
$scope.clearSearch = function() {
    $scope.searchAll = null;
}


     $scope.report = function report() {
              $location.path( '/tab/dash');

}


     $scope.login = function login() {


      var username=$scope.data.username
        var password=$scope.data.password;
       
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">

                   $scope.data.username = null;
                   $scope.data.password = null;
                  // alert($scope.data.username);
          if (username=="amber" && password=="password")
         {

                      $location.path( '/adminduties');
                  
         }
        else
        {
        
                  var alertPopup = $ionicPopup.alert({
            title: 'Login failed!',
            template: 'Please check your credentials!'
        });
        }

     }
        //$location.path('/tab/account');

});