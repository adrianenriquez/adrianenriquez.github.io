angular.module('ae.filters', [])

.filter('reverse', function(){
    return function(items) {
        return items.slice().reverse();
    };
})
.filter('snakeCase', function(){
    return function(permalink){
        return permalink.replace(/-/g, '_');
    }
})