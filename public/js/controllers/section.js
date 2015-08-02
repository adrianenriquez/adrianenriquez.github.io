angular.module('ae.section', [])

.controller('TestimonialsCtrl', ['$scope', '$resource', function ($scope, $resource) {
    $(".owl-carousel").owlCarousel({
        loop:true,
        dots: true,
        singleItem: true
    });
}])

.controller('ContactCtrl', ['$scope','$http', function($scope, $http){
    $scope.formData = {};
    
    $scope.processForm = function() {
    $('#btn-send').button('loading');

        $http({
            url     : '//formspree.io/me@adrianenriquez.com',
            method  : 'POST',
            data    : $.param($scope.formData),  // pass in data as strings
            dataType: 'json',
            headers : { 
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .success(function(data) {
            if (!data.success) {
                  // if not successful, bind errors to error variables
                  $scope.errorName = data.errors.name;
                  $scope.errorSuperhero = data.errors.superheroAlias;
                  //console.log('not successful');
            } else {
                  // if successful, bind success message to message
                  //console.log('successful');
                $('#contact-form').fadeOut().slideUp(1000, function(){
                    $('#thankyou-msg').removeClass('hidden').addClass('animated fadeIn');  
                });
            }
        });
        
    };
}]);