angular
  .module('friendBook')
  .controller('MainCtrl', function($scope, friendService) {
    $scope.thisAppIsBroken = "Good job you suck";

    $scope.getFriends = function() {
        friendService.getFriends().then(function(ok) {
          console.log(ok);
          console.log(ok.status);
          $scope.friends = ok.data;
        });
    }

      $scope.getFriends();

  })
