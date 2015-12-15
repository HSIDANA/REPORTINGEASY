angular.module('starter.logincontroller', [])
.controller('LoginController', function($scope, $location,$ionicPopup,AuthService)
{
    $scope.user = {};


    $scope.allow = function() {

        return AuthService.allow();
    };

    $scope.disallow = function() {
        return AuthService.disallow();
    };

    $scope.logout = function() {
        return AuthService.logout();
    };

    $scope.isAllowed = function() {
        alert("ji");
        return AuthService.isAllowed();
    };  


     $scope.login = function login() {

      var username=$scope.user.username;
        var password=$scope.user.password;


          if (username=="amber" && password=="password")
         {

                      $location.path( '/admin');
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