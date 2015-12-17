angular.module('starter.logincontroller', [])
.controller('LoginController', function($scope, $location,$ionicPopup)
{
    $scope.user = {};


     $scope.report = function report() {
              $location.path( '/tab/dash');

}


     $scope.login = function login() {

      var username=$scope.user.username;
        var password=$scope.user.password;
           // <input type="text" placeholder="Username or Email" autocorrect="off" autocapitalize="none" ng-model="user.username">


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