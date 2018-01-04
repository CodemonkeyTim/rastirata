function initControllers() {
	rastirataControllers.controller('loginCtrl', ['$scope', 
		function ($scope) {
			
		}
	]);

	rastirataControllers.controller('needleCtrl', ['$scope', '$interval', 'NeedleService',
		function ($scope, $interval, NeedleService) {
			$scope.needleDirection = 0;

			$interval(function () {
				$scope.needleDirection += NeedleService.getDirection();
			}, 250);
		}
	]);
}