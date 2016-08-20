angular
  .module('angFriends', [])
  .controller('FriendController', function($scope, $http) {

    //use $http to get friend-data.json
    $http.get('../friend-data.json').success(function(data) {
      $scope.friends = data;
    })

  })
