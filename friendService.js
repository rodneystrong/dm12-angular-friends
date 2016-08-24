angular
  .module('friendBook')
  .service('friendService', function($http) {
    // $http.get('friend-data.json') {
    //   response.status;
    //   return response.data;
    // })

    //make a func, that func will make $http call and return that call
    //and then do a .then on the thing that called the func
    //in your service.

    this.getFriends = function() {
      return $http.get('friend-data.json')
        .then(function(response){
          console.log(response);
          console.log(response.status);
          return response.data;
        });
    }

  })
