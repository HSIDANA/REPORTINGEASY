angular.module('starter.managerfactory', [])

.factory("Items", function($firebaseArray) {

     // create a reference to the Firebase where we will store our data
 var ref = new Firebase("https://mysafe.firebaseio.com/");
 
     // this uses AngularFire to create the synchronized array
     return $firebase(ref.limitToLast(10)).$asArray();
});