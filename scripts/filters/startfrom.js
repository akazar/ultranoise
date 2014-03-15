app.filter('startFrom', function() { //view stations from definite position
    return function(input, start) {
        start = +start; 
        return input.slice(start);
    }
});