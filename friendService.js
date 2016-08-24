angular
  .module('friendBook')
  .service('friendService', function($http) {
    $http.get('friend-data.json').then(function(response) {
      response.status;
      return response.data;
    })

    this.getFriends = function() {
      
    }

  })
