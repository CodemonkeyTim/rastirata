var rastirataApp;
var rastirataControllers;

function initAngular() {
    rastirataControllers = angular.module('rastirataControllers', []);

    rastirataApp = angular.module('rastirataApp', [
        'ngRoute',
        'rastirataControllers'
    ]);
}

function configAngular() {
    rastirataApp.config(['$routeProvider', '$compileProvider', '$httpProvider',
        function($routeProvider, $compileProvider, $httpProvider) {
            var routes = [
                "login",
                "needle"
            ]
            
            $.each(routes, function(index, route) {
                $routeProvider.when("/" + route, {
                    templateUrl: "templates/" + route + ".html",
                    controller: route + "Ctrl"
                });
            });
            
            $routeProvider.otherwise({
                redirectTo: '/login'
            });

            //$httpProvider.defaults.withCredentials = true;
        }
    ]);
}