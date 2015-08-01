angular.module('ae.testimonial', [])

.controller('TestimonialsCtrl', ['$scope', '$resource', function ($scope, $resource) {
    $(".owl-carousel").owlCarousel({
        loop:true,
        dots: true,
        singleItem: true
    });
}]);