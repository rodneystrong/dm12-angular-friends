angular
  .module('friendList')
  .controller('friendController', function($scope, $http){
    $scope.thisAppIsBroken = "This app wooooks!";

    //sorting variables
    var sortName;
    var sortDirection;

    $http.get('friend-data.json').success(function(data) {
      $scope.friends = data;
    })

  })
