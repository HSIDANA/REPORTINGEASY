// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db;
var fb = null;// can be used in any controller - this var is globally accessible
angular.module('starter', ['ionic','starter.logincontroller',
  'starter.accountctrl',
  'starter.auditctrl',
  'starter.chatdetailctrl',
  'starter.chatsctrl',
  'starter.dashctrl',
  'starter.meetingsctrl',
    'starter.riskreportcontroller',
    'starter.adminctrl',
    'starter.actioncontroller',
        'starter.admindatactrl',
            'starter.admindutiesctrl',
            'firebase',
          
            
  'ngCordova'])


  .run(function($ionicPlatform, $cordovaSQLite,  $rootScope ,$firebaseObject) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }

            if(window.cordova)
            {
db= $cordovaSQLite.openDB({name : "document.db" }); //device
// alert("In window");

            }
else
{
  // alert("In other");
db = window.openDatabase("document.db", '1', 'my', 1024*1024*100); // browser
$cordovaSQLite.execute(db, "CREATE TABLE  IF NOT EXISTS category(name text)");


}
  

    // db = $cordovaSQLite.openDB({ name: "document.db"});
    //         $cordovaSQLite.execute(db, "CREATE TABLE ID IF NOT EXISTS category(id integer primary key autoincrement, name text)");
         
        //     window.plugins.sqlDB.copy("document.db", function() {
        //     db = $cordovaSQLite.openDB({ name: "document.db"});
        //     $cordovaSQLite.execute(db, "CREATE TABLE ID IF NOT EXISTS category(id integer primary key autoincrement)")
        // }, function(error) {
        //     console.error("There was an error copying the database: " + error);
        //     db = $cordovaSQLite.openDB("document.db");
        // });

        });





})


.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
$httpProvider.defaults.useXDomain = true;$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    .state('tab.audit', {
    url: '/audit',
    views: {
      'tab-audit': {
        templateUrl: 'templates/tab-audit.html',
        controller: 'AuditCtrl'
      }
    }
  })
      .state('tab.meetings', {
    url: '/meetings',
    views: {
      'tab-meetings': {
        templateUrl: 'templates/tab-meetings.html',
        controller: 'MeetingsCtrl'
      }
    }
  })
            .state('riskreport', {
    url: '/riskreport',
  
        templateUrl: 'templates/riskreport.html',
        controller: 'RiskReportController'
  })
                        .state('actiontype', {
    url: '/actiontype',
  
        templateUrl: 'templates/actiontype.html',
        controller: 'ActionCtrl'
  })
.state('admin', {
    url:'/admin',
    templateUrl: 'templates/admin.html',
    controller: 'AdminCtrl'
  }) 
.state('admindata', {
    url:'/admindata',
    templateUrl: 'templates/admindata.html',
    controller: 'AdminDataCtrl'
  }) 
.state('adminduties', {
    url:'/adminduties',
    templateUrl: 'templates/adminduties.html',
    controller: 'AdminDutiesCtrl'
  }) 


.state('login', {
    url:'/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  }) 
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
