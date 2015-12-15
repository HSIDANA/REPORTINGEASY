angular.module('starter.AuthService', [])



.factory('AuthService', function($state) {
    var allowed = false;

    function allow() {
        allowed = true;
        alert("allowed = "+ allowed);
   $location.path( '/tab/riskreport');
    }

    function disallow() {
        allowed = false;
        alert("allowed = "+ allowed);
              $location.path( 'tab/dash');
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

