angular.module('ae.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'resources/views/home.html',
            controller  : 'MainCtrl'
        })

        // route for the about page
        .when('/work/:permalink', {
            templateUrl : 'resources/views/works.html',
            controller  : 'WorkCtrl'
        })
});