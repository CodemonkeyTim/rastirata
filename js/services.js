function initServices() {
	rastirataApp.factory('NeedleService', function() {
		function getDirection () {
			return 100;
		}

		return {
			getDirection: getDirection
		}
	});
}