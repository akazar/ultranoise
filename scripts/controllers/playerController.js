app.controller('PlayerController', ['$scope', '$filter', function($scope,$filter) {
  //settings for pagination
  $scope.currentPage = 1;
  $scope.itemsPerPage = 8;
  //settings for genres
  $scope.genreForFilter = '';
  $scope.genres = ['disco','news'];
  $scope.stations = [];

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

}]);
