angular
  .module('friendBook')
  .controller('MainCtrl', function($scope, friendService) {
    $scope.thisAppIsBroken = "Good job you suck";

    $scope.getFriends = function() {
        friendService.getFriends().then(function(friends) {
          $scope.friends = friends;
        });
    }

      $scope.getFriends();

  })
