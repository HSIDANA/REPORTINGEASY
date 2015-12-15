angular.module('starter.authservice', [])



.factory('AuthService', function($state) {
    var allowed = false;

    function allow() {
        allowed = true;

        $state.go('tab.riskreport');
    }

    function disallow() {
        allowed = false;

            $state.go('tab.dash');
    }

    function logout() {
        allowed = false;
        $state.go('login');
    }

    function isAllowed() {

        return allowed;
    }

    return {
        isAllowed: isAllowed,
        allow: allow,
        disallow: disallow,
        logout: logout
    };
})

