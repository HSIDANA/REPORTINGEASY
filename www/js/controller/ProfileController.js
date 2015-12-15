angular.module('controller.profile', [])
.controller('ProfileController', function($scope, $state, $location, UserService, $stateParams, $ionicActionSheet, AuthenticationService, LiveFeedService, incidentVote) {
	$scope.user = {};


	$scope.$on('$ionicView.enter', function(e) {

		//If we send -1, it will return current user
		var id = -1;
		$scope.isLoggedInUser = true;

		if($stateParams.id) {
			id = $stateParams.id;
			//if it isn't the logged in user, hide the email and edit buttons
			if (parseInt(id) != UserService.getCurrentUserID()) {
				$scope.isLoggedInUser = false;
			}
		}

		UserService.getUser(id)
		.then(function(response) {
			console.log("Got user: " + JSON.stringify(response.data));
			$scope.user = response.data;
		},
		function(data) {
			console.log("UserServiceError");
		})

		UserService.getUserFeed(id)
		.then(function(response) {
			console.log("Got user: " + response.data);
			$scope.items = response.data;
		},
		function(data) {
			console.log("UserServiceError");
		})

		UserService.getScore(id)
		.then(function(response) {
			$scope.user.score = response.data;

		},
		function(error) {
			console.log("UserServiceError");
		})

		$scope.buttons = [{text: 'Edit'}];
		if (isAdmin()) {
			$scope.buttons.push({text:'Admin'});
		}
		
	})


	isAdmin = function() {
		if ($scope.user.userRole === "ROLE_ADMIN") {
			return true;
		}
		return false;
	}


	$scope.optionsSelected = function() {
		//Show an action sheet
		// Show the action sheet
		

		console.log("Buttons: " +JSON.stringify($scope.buttons));


		var hideSheet = $ionicActionSheet.show({
			buttons: $scope.buttons,
			destructiveText: 'Logout',
			cancelText: 'Cancel',
			cancel: function() {
          	// add cancel code..
          },
          buttonClicked: function(index) {
          	console.log("Index: " +index);

          	//Show the signup page - populate fields except password.
          	if(index == 0) {
          		$location.path("signup");
          		return true;

          	}

          	//TODO: This will change when we hide/show the admin page
          	if (index == 1) {
          		$location.path("tab/profile/admin");
          		return true;
          	}

          	return true;
          },
          destructiveButtonClicked: function(index) {
          	AuthenticationService.Logout();
          	$location.path("login");

          	return true;
          	
          }
      });
	}

	/* ##### UpVotes & DownVotess ##### */
	//TODO: Abstract to new module or something...

	$scope.upVote = function(index) {

		//Get the item for index
		var item = $scope.items[index];

		//Get vote from local storage
		var vote = incidentVote.getVote(item.incident_id);
		if (vote === 1){return;}
		vote++;
		incidentVote.setVote(item.incident_id, vote);

		var id = item.id;

		console.log("Upvote: " + id);
		LiveFeedService.upVote(id)
		.then(function(response) {
			$scope.items[index].voteCount = response.data.voteCount;
		},
		function(response) {
		});
	}

	$scope.downVote = function(index) {
		//Get the item for index
		var item = $scope.items[index];

		//Get vote from local storage
		var vote = incidentVote.getVote(item.incident_id);
		if (vote === -1){return;}
		vote--;
		incidentVote.setVote(item.incident_id, vote);


		item.score-- ;
		item.vote-- ;
		var id = item.id;

		console.log("Downvote:" + id);
		LiveFeedService.downVote(id)
		.then(function(response) {
			$scope.items[index].voteCount = response.data.voteCount;

			//Ask user why they downvoted
			if (vote === -1){
				optionsSelected();
			}
		},
		function(response) {
			//Ask user why they downvoted
			if (vote === -1){
				optionsSelected();
			}
		});
	}


	var optionsSelected = function() {
		//Show an action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [
			{ text: 'This post is offensive' },
			{ text: 'This post is a duplicate' },
			{ text: 'This post is irrelevant' },
			],
			titleText: 'Reason for downvoting',
			cancelText: 'Cancel',
			cancel: function() {
          	// add cancel code..
          },
          buttonClicked: function(index) {
          	//TODO: Send report!

          	return true;
          }
      });
	}

	$scope.displayImage = function (media) {
		if (!media) {
			return false;
		}
		return true;
	}

	//Redirect to Tab root on click
	$scope.onTabSelected = function() {
		$state.go('tab.profile');
	}


})