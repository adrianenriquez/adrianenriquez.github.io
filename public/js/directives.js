angular.module('ae.directives', [])

.directive('stickyNav', ['$window', function($window) {
	return {
		scope: {
			scroll: '=stickyNav'
		},
		link: function(scope, element, attrs) {
			var windowEl = angular.element($window);
			var handler = function() {
				scope.scroll = windowEl.scrollTop();
				scope.windowHeight = windowEl.height();
				if (scope.windowHeight <= scope.scroll){
					element.addClass('navbar-fixed-top');
					element.removeClass('navbar-static-top');
				} else {
					element.removeClass('navbar-fixed-top');
					element.addClass('navbar-static-top');
				}
			}
			windowEl.on('scroll', scope.$apply.bind(scope, handler));
			handler();
		}
	};
}]);