app.directive("station", function(){
  return {
    restrict: "E",
    controller: ['$scope', '$http', function($scope, $http) {
      $http({method: 'GET', url: 'scripts/json/stations.json'}).  //get all stations from json
        success(function(data, status, headers, config) {
          $scope.stations = data;
          $scope.totalItems = $scope.stations.length;
      }).
      error(function(data, status, headers, config) {
          console.log(status);
      });
    }],
    templateUrl: 'views/station.html',
    link: function ($scope, elem, attrs) {
      $scope.setAndPlay = function(url, title){ //play new station or stop plaing current
        $scope.$emit('stationPlay', url, title);
      }
    }
  }
});