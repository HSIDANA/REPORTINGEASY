//http://learn.ionicframework.com/formulas/backend-data/

angular.module('starter.controllers', ['ngCordova'])
.controller('DashCtrl', function($scope, $state, $location,$ionicPopup, $http, $ionicModal,$cordovaSQLite) {
  

$http.get('js/resources/categories.js').success(function (results) {
    $scope.categories = results;
    //alert($scope.categories);
    // $scope.report = {}
//     $scope.date= new Date();
//     var newDate = new Date(); 
//     var convertedDateString = newDate.toLocaleString();
//     var convertedDate = new Date(convertedDateString);
//     $scope.report.date = convertedDate;
//     $scope.categories = categories;
//     $scope.report.category = {};
  });


  var maxDateTime = new Date();
  var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
  var minDateTime = new Date(minDate);
  $scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
  $scope.minDateTimeString = minDateTime.toISOString().split(".")[0];

$scope.items = [];



   // $scope.insert = function()
   // {
   //       alert("h");
   //  db.transaction(function(tx)
   //  {
   //         alert("h");
   //    tx.executeSql("INSERT INTO category(name) VALUES (?)",  ["test"].then(function(tx)
   //    {
   //        alert("h");
   //      // {
   //      //        alert("h");
   //      //   if (result.rows>0)
   //      // {
   //      //          alert("h");
   //      //         console.log(result.rows.items(0).name);
   //      //       }}),function (err) {
   //      //      console.error(err);
    
   //  }));

   //  })
   //  } ;
   db = window.openDatabase("document.db", '1', 'my', 1024*1024*100); // browser
$cordovaSQLite.execute(db, "CREATE TABLE category IF NOT EXISTS category(name text)");

  $scope.insert = function() {

    var query = "INSERT INTO category (name) VALUES (?)";

    $cordovaSQLite.execute(db, query, ["test"]).then(function(res) {

    }, function (err) {
      console.error(err);
    });
  };




   //  var query = "INSERT INTO category(name) VALUES (?,?)";
   //  $cordovaSQLite.execute(db, query, [name]).then(function(result)
   //  {
   //   alert(name);
   //    console.login("result.insertId");
   //      }
   //   , function (err) {
   //          console.error(err);
   // });
 

   // $scope.select = function(name)
   // {
   //  var query = "SELECT name from category WHERE name = ?";
   //  $cordovaSQLite.execute(db,query, [name]).then(function(result)
   //  {
   //    if (result.rows>0)
   //      {
   //               alert(result);
   //              console.Login(result.rows.items(0).name);
   //            }
   //      } ,function (err) {
   //          console.error(err);

   //  });
   // }

    // $scope.selectAll = function() {
    //     var query = "SELECT name FROM category";
    //     $cordovaSQLite.execute(db, query, []).then(function(res) {
    //         if(res.rows.length > 0) {
    //             for(var i = 0; i < res.rows.length; i++) {
    //      $scope.items.push(name:res.rows.item(i)));
    //             }
    //         } else {
    //             console.log("No results found");
    //         }
    //     }, function (err) {
    //         console.error(err);
    //     };
    // }
  // $http.get('js/resources/managers.js').success(function (results) {
  //   alert("f");
  //   $scope.managers = results.managers;
  //       $scope.report.manager = managers;
  // });


//   $http.get('js/resources/categories.js').success(function (results) {
//     $scope.report.category = results.categories;




// $scope.report = {}
//     $scope.date= new Date();
//     var newDate = new Date(); 
//     var convertedDateString = newDate.toLocaleString();
//     var convertedDate = new Date(convertedDateString);
//     $scope.report.date = convertedDate;
//     $scope.categories = categories;
//     $scope.report.category = {};



// var db;
// if (window.cordova) {
//       db = $cordovaSQLite.openDB({ name: "myApp.db" }); //device
//     }else{
//       db = window.openDatabase("myApp.db", " ", "my", 1024 * 1024 * 100); // browser
//     }

//     $scope.selectAll = function() {
//         var query = "SELECT name FROM category";
//         $cordovaSQLite.execute(db, query, []).then(function(res) {
//             if(res.rows.length > 0) {
//                 for(var i = 0; i < res.rows.length; i++) {
//                     $scope.items.push(name:res.rows.item(i).name);
//                 }
//             } else {
//                 console.log("No results found");
//             }
//         }, function (err) {
//             console.error(err);
//         });
//     }



  // });
  if (($scope.report.text == null) || ($scope.report.date == null) || ($scope.report.category == null) || ($scope.report.RAtitle == null) || ($scope.report.assetNo == null) ||($scope.report.department == null) || ($scope.report.manager == null)) {
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: "Please fill out all the fields"
      });
      return;
    }



})
.controller('AuditCtrl', function($scope, $state, $location,$ionicPopup, $http, $ionicModal) {
  
  var maxDateTime = new Date();
  var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
  var minDateTime = new Date(minDate);
  $scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
  $scope.minDateTimeString = minDateTime.toISOString().split(".")[0];


})
.controller('MeetingsCtrl', function($scope, $state, $location,$ionicPopup,$ngCordova,$cordovaSQLite, $http, $ionicModal) {


$http.get('js/resources/categories.js').success(function (results) {

    $scope.categories = results;
    //alert($scope.categories);
    // $scope.report = {}
//     $scope.date= new Date();
//     var newDate = new Date(); 
//     var convertedDateString = newDate.toLocaleString();
//     var convertedDate = new Date(convertedDateString);
//     $scope.report.date = convertedDate;
//     $scope.categories = categories;
//     $scope.report.category = {};
  });



        // Execute SELECT statement to load message from database.

  var maxDateTime = new Date();
  var minDate = maxDateTime - 1000 * 60 * 60 * 24 * 5;
  var minDateTime = new Date(minDate);
  $scope.maxDateTimeString = maxDateTime.toISOString().split(".")[0];
  $scope.minDateTimeString = minDateTime.toISOString().split(".")[0];

  $http.get('js/resources/categories.json').success(function (results) {
    $scope.categories = results.categories;

$scope.report = {}
    $scope.date= new Date();
    var newDate = new Date(); 
    var convertedDateString = newDate.toLocaleString();
    var convertedDate = new Date(convertedDateString);
    $scope.report.date = convertedDate;
    $scope.categories = categories;
    $scope.report.category = {};

  });

})
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
    

})
.controller('ChatsCtrl', function($scope, Chats) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
$scope.selected = function()
{
$http.get('js/resources/categories.js').success(function (results) {

    $scope.categories = results;
    //alert($scope.categories);
    // $scope.report = {}
//     $scope.date= new Date();
//     var newDate = new Date(); 
//     var convertedDateString = newDate.toLocaleString();
//     var convertedDate = new Date(convertedDateString);
//     $scope.report.date = convertedDate;
//     $scope.categories = categories;
//     $scope.report.category = {};
  });
};
  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
