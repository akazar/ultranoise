app.directive("player",['$document', function($document){
  return {
    restrict: "E",
    templateUrl: 'views/player.html',
    link: function ($scope, elem, attrs) {
        $scope.audio = $document[0].createElement('audio'); //create audio HTML5 element
        $scope.audio.volume = 0.7;
        $scope.playerInit = false;
        $scope.playing = false;

        $scope.play = function() {  //play audio
          $scope.audio.play();
          $scope.playing = true;
        },

        $scope.stop = function() {  //stop plaing audio
          $scope.audio.pause();
          $scope.playing = false;
        },

        $scope.volumeMinus = function(){ //reduce volume
          if ($scope.audio.volume>=0.1) {
            $scope.audio.volume -= 0.1;
          }
        },

        $scope.volumePlus = function(){ //increase volume
          if ($scope.audio.volume<=0.9) {
            $scope.audio.volume += 0.1;
          }
        },

        $scope.$on('stationPlay', function(event, stream, title) { //play new station or stop plaing current
          if ($scope.playing && ($scope.audio.src == stream)) {
            $scope.audio.pause();
            $scope.playing = false;
            return;
          };
          if ($scope.playing) $scope.audio.pause(); 
          $scope.audio.src = stream;
          $scope.playTitle = title;
          $scope.audio.play();
          $scope.playing = true;
          $scope.playerInit = true;
        });
      }
  }
}]);