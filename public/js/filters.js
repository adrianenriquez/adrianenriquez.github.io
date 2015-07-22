angular.module('ae.filters', [])

.filter('reverse', function(){
    return function(items) {
        return items.slice().reverse();
    };
})
.filter('toKebabCase', function(){
    return function(permalink){
        return permalink.replace(/_/g, '-');
    }
})