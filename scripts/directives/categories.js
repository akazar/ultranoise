//Show all categories of stations
app.directive("categories",['$filter', function($filter){
//app.directive("categories", function(){
  return {
    restrict: "E",
    link: function ($scope, elem, attrs) {
    	$scope.setGenre = function(genre){  //show stations by definite genre
		    $scope.genreForFilter = genre;
		    $scope.currentPage = 1;
		    $scope.totalItems = 0;
		    if (genre != '') {
		    	$scope.totalItems = ($filter('filter')($scope.stations, {'genre': genre})).length;
		    }
		    else{
		    	$scope.totalItems = $scope.stations.length;
		    }
		  }
    },
    templateUrl: 'views/categories.html'
  }
}]);