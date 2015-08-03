angular.module('ae.filters', [])

.filter('reverse', function(){
    return function(items) {
        return items.slice().reverse();
    };
})
.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            appended = input.slice(0,start);
            initialArray = input.slice(start);
            finalArray= initialArray.concat(appended);
            return finalArray;
        }
        return [];
})
.filter('toKebabCase', function(){
    return function(permalink){
        return permalink.replace(/_/g, '-');
    }
});
