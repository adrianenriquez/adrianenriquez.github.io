angular.module('ae.main', [])

.controller('MainCtrl', function($resource, $scope){

    // Resources
    var profile = $resource("resources/data/profile.json"),
    education = $resource("resources/data/education.json"),
    employment = $resource("resources/data/employment.json"),
    projects = $resource("resources/data/project-list.json"),
    social = $resource("resources/data/social.json"),
    testimonials = $resource("resources/data/testimonials.json");

    // Add to scopes
    profile.get(function(data){
        $scope.profile = data;
    });
    education.get(function(data){
        $scope.education = data;
    });
    employment.query(function(data){
        $scope.employment = data;
    });
    projects.query(function(data){
        $scope.projects = data;
    });
    testimonials.query(function(data){
        $scope.testimonials = data;
    });
    social.query(function(data){
        $scope.social = data;
    });

});