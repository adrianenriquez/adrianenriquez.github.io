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

angular.module('ae.home', ['duScroll'])

.value('duScrollEasing', EasingFunctions.easeInOutCubic)

.value('duScrollDuration', 1200)

.controller('HomeCtrl', ['$rootScope', function ($rootScope) {
	    
    var setupPreviousState = function(){
        $rootScope.previousState = 'home';
        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams){
            $rootScope.previousState = from.name;
        })  
    }

    var waypoint = new Waypoint({
        element: document.getElementById('stats-container'),
        handler: function(direction) {
          new CountUp("projects-done", 1, 20, 0, 2).start();
          new CountUp("clients-worked", 1, 10, 0, 2).start();
          new CountUp("experience-years", 1, 2, 0, 2).start();
          //numAnim.start();
          this.destroy()
        },
        offset: '75%'
    });

    var init = function(){
      setupPreviousState();
      new WOW().init();
      FastClick.attach(document.body);
    }

    init();
    
}]);