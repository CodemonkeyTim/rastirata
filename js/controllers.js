function initControllers() {
	rastirataControllers.controller('loginCtrl', ['$scope', '$timeout', '$location',
		function ($scope, $timeout, $location) {
			$scope.secret = "";

			$scope.secretNotCorrectVisible = false;
			
			$scope.checkSecretKey = function () {
				$scope.secretNotCorrectVisible = false;

				$timeout(function () {
					if ($scope.secret != "1604") {
						$scope.secretNotCorrectVisible = true;
					} else {
						$location.path("/needle")
					}
				}, 1000);
			}
		}
	]);

	rastirataControllers.controller('needleCtrl', ['$scope', '$interval', 'NeedleService',
		function ($scope, $interval, NeedleService) {
			$scope.needleDirection = 0;

			var permissions = cordova.plugins.permissions;

			permissions.requestPermission(permissions.ACCESS_FINE_LOCATION, success, error);

			function error() {
				alert("Tää ei toimi jos et anna lupaa :(");

			  	$interval(function () {
			  		NeedleService.getDirection().then(function (direction) {
						$scope.needleDirection = direction;	
					}, function (error) {
						alert(error.message);
						alert(error.code);
					});
			  	}, 5000);
			}

			function success( status ) {
			  	if( !status.hasPermission ) {
			  		error();
			  	} else {
			  		$interval(function () {
						NeedleService.getDirection().then(function (direction) {
							$scope.needleDirection = direction;
						}, function (error) {
							alert(error.message);
							alert(error.code);
						});
					}, 5000);
			  	}
			}
		}
	]);
}