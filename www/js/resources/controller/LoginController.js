angular.module('starter.logincontroller', [])
.controller('LoginController', function($scope, $location,$ionicPopup)
{
    $scope.user = {};
$scope.report = function report(){

                      $location.path( 'tab/dash');
}

     $scope.login = function login() {

      var username=$scope.user.username;
        var password=$scope.user.password;
          if(username=="admin" && password=="admin123")
        {
            $location.path( '/tab/dash');
        }
         else if (username=="amber" && password=="password")
         {
                      $location.path( '/tab/report');
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