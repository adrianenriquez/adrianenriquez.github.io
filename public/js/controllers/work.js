angular.module('ae.work', [])

 .controller('WorkCtrl', function ($scope, $resource, $routeParams) {
    var permalink = $routeParams.permalink;

    $scope.permalink = permalink;
    
    var works = $resource("resources/data/projects2.json");

    works.get(function(data){
        $scope.works = data;
    });
});