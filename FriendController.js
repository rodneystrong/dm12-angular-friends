angular
  .module('friendBook')
  .controller('MainCtrl', function($scope, friendService) {
    $scope.thisAppIsBroken = "Good job you suck";

    $scope.getFriends = function() {
        $scope.friends = friendService.getFriends();
    }

      $scope.getFriends();

  })
