angular.module('ae.config', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', function($stateProvider, $urlRouterProvider, $compileProvider) {

    // Routes setup
    var setupRoutes = function(){
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");

        $stateProvider
        // route for the home page
        .state('home', {
            url: "/",
            templateUrl : "resources/views/home.html",
            controller  : "HomeCtrl"
        })

        // route for the about page
        .state('home.work', {
            url: "work/:permalink",
            onEnter: ['$state', '$modal', '$rootScope', function ($state, $modal, $rootScope){
                $modal.open({
                    templateUrl: 'resources/views/partials/works-modal.html',
                    controller: 'WorkCtrl',
                    size: 'md'
                }).result.finally(function(){
                    $state.go($rootScope.previousState);
                })
            }]
        });
    }

    // remove unsafe: in links
    var hrefSanitation = function(){
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|skype):/);
    };
    
    // initialize application
    var init = function(){
        setupRoutes();
        hrefSanitation();
    }
    
    init();
}]);