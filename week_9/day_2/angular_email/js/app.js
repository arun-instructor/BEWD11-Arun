var app = angular.module("angularEmail", ["ngRoute"]);

var endpointBase = "http://localhost:3000";

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "show-mail.html",
            controller: "mailCtrl"
        })
        .when("/compose", {
            templateUrl: "compose-mail.html",
            controller: "mailCtrl"
        })
        .when("/sent", {
            templateUrl: "sent-mail.html",
            controller: "sentMailCtrl"
        })
        .when("/message/:id", {
            templateUrl: "message.html",
            controller: "messageCtrl"
        })
        .when("/signup", {
            templateUrl: "signup.html",
            controller: "signupCtrl"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "loginCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);

app.factory("Helpers", function() {
	return {
		userLoggedIn: function() {
			if (localStorage.getItem("auth_token")) {
				return true;
			} else {
				return false;
			}
		}
	}
});

app.controller("topNavCtrl", function($scope, $location, Helpers) {
	if (Helpers.userLoggedIn()) {
		$scope.loggedIn = true;
	} else {
		$scope.loggedIn = false;
	}

	$scope.logout = function(event) {
		event.preventDefault();

		localStorage.clear();

		$location.path("/login");
	}
});

app.controller("mainNavCtrl", function($scope, $location) {
	$scope.isActive = function(route) {
		return route === $location.path();
	}

	$scope.personName = localStorage.getItem("name");
});

app.controller("mailCtrl", function($scope, $location, $http, Helpers) {
	if (!Helpers.userLoggedIn()) {
		$location.path("/login");
	}

	$http.get(endpointBase + "/messages", {
		headers: {
			"Authorization": "Token token=" + localStorage.getItem("auth_token")
		}
	})
		.success(function(messages) {
			$scope.messages = messages;

			if (messages.length === 0) {
				$scope.emptyMessages = true;
			}
		})
		.error(function() {
			alert("Error getting messages");
		});

	$scope.sendMessage = function() {
		$http.post(endpointBase + "/messages", {message: $scope.message}, {
			headers: {
				"Authorization": "Token token=" + localStorage.getItem("auth_token")
			}
		})
			.success(function() {
				$scope.message = null;

				$location.path("/");
			})
			.error(function() {
				alert("Error sending message.");
			});
	}
});

app.controller("messageCtrl", function($scope, $routeParams, $http, $location) {
	$http.get(endpointBase + "/messages/" + $routeParams.id, {
		headers: {
			"Authorization": "Token token=" + localStorage.getItem("auth_token")
		}
	})
		.success(function(message) {
			$scope.message = message;
		})
		.error(function() {
			$location.path("/");
		});

	$scope.deleteMessage = function() {
		$http.delete(endpointBase + "/messages/" + $routeParams.id, {
			headers: {
				"Authorization": "Token token=" + localStorage.getItem("auth_token")
			}
		})
			.success(function() {
				$location.path("/");
			})
			.error(function() {
				alert("Error deleting message.");
			});
	}
});

app.controller("sentMailCtrl", function($scope, $http) {
	$http.get(endpointBase + "/messages/sent", {
		headers: {
			"Authorization": "Token token=" + localStorage.getItem("auth_token")
		}
	})
		.success(function(messages) {
			$scope.messages = messages;

			if (messages.length === 0) {
				$scope.emptyMessages = true;
			}
		})
		.error(function() {
			alert("Error getting messages");
		});
});

app.controller("signupCtrl", function($scope, $location, $http) {
	$scope.signUp = function() {
		$http.post(endpointBase + "/users.json", {user: $scope.user})
			.success(function(user) {
				localStorage.setItem("auth_token", user.auth_token);
				localStorage.setItem("name", user.firstname + " " + user.lastname);
				$location.path("/");
			})
			.error(function() {
				alert("Error signing up user.");
			});
	}
});

app.controller("loginCtrl", function($scope, $http, $location) {
	$scope.login = function() {
		$http.post(endpointBase + "/users/sign_in.json", {user: $scope.user})
			.success(function(user) {
				localStorage.setItem("auth_token", user.auth_token);
				localStorage.setItem("name", user.firstname + " " + user.lastname);
				$location.path("/");
			})
			.error(function(stuff) {
				alert("Error logging in user.");
			});
	}
});