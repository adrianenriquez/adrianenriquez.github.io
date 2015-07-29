angular.module('ae.work', ['ngAnimate'])

.controller('WorkCtrl', function ($scope, $resource, $modal, $stateParams) {

    var works = $resource("resources/data/projects.json");
    works.get(function(data){
        $scope.works = data;
    });

    function toSnakeCase(url){
        if (url != undefined) return url.replace(/-/g, '_');
    };

    function selectedWork(){
        return toSnakeCase($stateParams.permalink);
    };

    function onAnimationEnd(elem, callback){
        $(elem).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', callback);
    };

    /** 
     * Tweak to add animations to modal closing.
     */
    $scope.closeModal = function(){
        var $modal = $('.modal');

        $('.modal-backdrop').removeClass('in');
        $modal.removeClass('in');
        setTimeout(function(){
            $scope.$dismiss();
        }, 200);
        
    };

    $scope.showAllWorks = true;
    $scope.active = selectedWork();
});