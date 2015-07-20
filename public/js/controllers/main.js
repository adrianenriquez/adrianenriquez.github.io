'use strict';

/**
 * @ngdoc function
 * @name adrianenriquezApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adrianenriquezApp
 */

/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
 var EasingFunctions = {
  // no easing, no acceleration
  linear: function (t) { return t },
  // accelerating from zero velocity
  easeInQuad: function (t) { return t*t },
  // decelerating to zero velocity
  easeOutQuad: function (t) { return t*(2-t) },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  // accelerating from zero velocity 
  easeInCubic: function (t) { return t*t*t },
  // decelerating to zero velocity 
  easeOutCubic: function (t) { return (--t)*t*t+1 },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  // accelerating from zero velocity 
  easeInQuart: function (t) { return t*t*t*t },
  // decelerating to zero velocity 
  easeOutQuart: function (t) { return 1-(--t)*t*t*t },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  // accelerating from zero velocity
  easeInQuint: function (t) { return t*t*t*t*t },
  // decelerating to zero velocity
  easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}

angular.module('ae.main', ['duScroll'])

.value('duScrollEasing', EasingFunctions.easeOutQuint)

.controller('MainCtrl', function ($scope, $resource) {
	
	// Resources
	var profile = $resource("resources/data/profile.json"),
	education = $resource("resources/data/education.json"),
	employment = $resource("resources/data/employment.json"),
	projects = $resource("resources/data/projects.json"),
	works = $resource("resources/data/projects2.json"),
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
	works.get(function(data){
		$scope.works = data;
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