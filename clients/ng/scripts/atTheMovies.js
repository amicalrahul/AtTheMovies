(function() {

    var module = angular.module("atTheMovies", ["ngRoute", "ngAnimate"]);

    module.constant("movieApiUrl", "/api/movies");

    module.config(function($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "views/list.html"
            })
            .when("/detail/:id", {
                templateUrl: "views/detail.html"
            })
            .otherwise({
                redirectTo: "/list"
            });
    });

    module.run(function($rootScope) {
        $rootScope.error = {
            current: ""
        };
    });

}());