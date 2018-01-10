function initServices() {
	rastirataApp.factory('NeedleService', function($q) {
		var thePoint = {
			lat: 61.047951,
			lon: 25.613139
		}

		var there = LatLon(thePoint.lat, thePoint.lon);

		var geoOptions = {
			maximumAge: 3000,
			timeout: 5000,
			enableHighAccuracy: true
		}

		function getDirection () {
			/* 
			var myPoint = {
				lat: 61.002705 + (Math.random() / 10),
				lon: 25.676580 + (Math.random() / 10)
			}
			*/

			return $q(function (resolve, reject) {
				function geoSuccess(position) {
					var here = LatLon(position.coords.latitude, position.coords.longitude);

					var bearing = here.bearingTo(there);

					/*
					if (here.distanceTo(there) < 2) {
						bearing = here.finalBearingTo(there);
					} else {
						bearing = here.bearingTo(there);
					}*/

					resolve(bearing);
				}

				function geoError(error) {
					reject(error);
				}

				navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
			});
		}

		return {
			getDirection: getDirection
		}
	});
}