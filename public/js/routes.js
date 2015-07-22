angular.module('ae.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");


    $stateProvider
        // route for the home page
        .state('home', {
            url: "/",
            templateUrl : "resources/views/home.html",
            controller  : "MainCtrl"
        })

        // route for the about page
        .state('home.work', {
            url: "work/:permalink",
            onEnter: function ($state, $modal, $rootScope){
                $modal.open({
                    templateUrl: 'resources/views/partials/works-modal.html',
                    controller: 'WorkCtrl'
                }).result.finally(function(){
                    $state.go($rootScope.previousState);
                })
            }
        });
    });