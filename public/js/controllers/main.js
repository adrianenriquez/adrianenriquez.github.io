'use strict';

/**
 * @ngdoc function
 * @name adrianenriquezApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adrianenriquezApp
 */
angular.module('ae.main', [])

  .controller('MainCtrl', function ($scope, $resource) {
    
    // Resources
    var profile = $resource("resources/data/profile.json"),
        education = $resource("resources/data/education.json"),
        employment = $resource("resources/data/employment.json"),
        projects = $resource("resources/data/projects.json"),
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

    // Changing navbar background
    $(window).scroll(function() {
        var $mainNav = $('#main-nav');
        var viewportHeight = $(window).height();

        if ($(this).scrollTop() > (viewportHeight - 70)) {
            $mainNav.addClass('bg-black');
        } else {
            $mainNav.removeClass('bg-black');   
        }
    });

});