angular.module('ae.work', [])

.controller('WorkCtrl', function ($scope, $resource, $modal, $stateParams) {

    var works = $resource("resources/data/projects2.json");
    works.get(function(data){
        $scope.works = data;
    });

    function toSnakeCase(url){
        if (url != undefined) return url.replace(/-/g, '_');
    };

    function selectedWork(){
        return toSnakeCase($stateParams.permalink);
    };

    $scope.closeModal = function(){
        $scope.$dismiss();
    }

    $scope.selectedWork = selectedWork();
});