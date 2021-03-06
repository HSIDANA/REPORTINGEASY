(function () {
    'use strict';
    angular.module('starter.authservice',[])
    .factory('AuthenticationService', function($http, $rootScope, $timeout, $location, loginService, $localstorage, UserService){
//http://arthur.gonigberg.com/2013/06/29/angularjs-role-based-auth/
        var service = {};

        service.Login = Login;
        service.getCredentials = getCredentials;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;
        service.Logout = Logout;
        return service;

        function Login(user) {
            //This isn't ideal, just the way that this was structured.
            return loginService.login(user);
        }

        function Logout() {
            loginService.logout(); //TODO: fix, right now this doesn't work. But clearing credentials works for now.
            ClearCredentials()
        }

        function getCredentials() {

            return UserService.getUserDetails()
        }

        function SetCredentials(username, userID, password) {
            var authdata = Base64.encode(username + ':' + password);


            $rootScope.globals = {
                currentUser: {
                    username: username,
                    userID:userID,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $localstorage.setObject('globals', $rootScope.globals);
        }

        function ClearCredentials() {
            console.log("Clearing Credentials");
            $rootScope.globals = {};
            $localstorage.delete('globals');
            $http.defaults.headers.common.Authorization = 'Basic';
        }
    })

// Base64 encoding service used by AuthenticationService
var Base64 = {

    keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this.keyStr.charAt(enc1) +
            this.keyStr.charAt(enc2) +
            this.keyStr.charAt(enc3) +
            this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);

        return output;
    },
    };


})();