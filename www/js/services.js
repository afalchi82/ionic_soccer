angular.module('starter.services', ['firebase'])

.constant('FB_URL', '')

.factory('Players', function($firebaseArray) {
  // Might use a resource here that returns a JSON array
  var itemsRef = new Firebase("https://afalch.firebaseio.com/calcetto");
  var players = $firebaseArray(itemsRef);

  

  return {
    all: function() {
      return players;
    },
    remove: function(player) {
      players.splice(players.indexOf(player), 1);
    },
    get: function(playerId) {
      for (var i = 0; i < players.length; i++) {
        if (players[i].id === parseInt(playerId)) {
          return players[i];
        }
      }
      return null;
    }
  };
})

.factory('Games', function($firebaseArray) {
  
  var FB_matches = new Firebase('https://m1sc.firebaseio.com/ionic_soccer/matches'),
      FB_matches_arr = $firebaseArray(FB_matches);

  
  return {
    all: function() {
      return FB_matches_arr;
    },
    saveNewMatch: function (obj) {
      console.log(obj);
      FB_matches_arr.$add(obj);
    },
    removeMatch: function (obj) {
      FB_matches_arr.$remove(obj);
    },
    fb_array: $firebaseArray(FB_matches),
    get: function(gameId) {
      
      for (var i = 0; i < FB_matches_arr.length; i++) {
        console.log(FB_matches_arr[i].$id);
        if (FB_matches_arr[i].$id === gameId) {
          return FB_matches_arr[i];
        }
        
        /*
        if (games[i].id === parseInt(gameId)) {
          return games[i];
        }
        */
      }
      return null;
    }
  };
})

.factory('firebaseMatchesArr', function($firebaseArray) {
  var itemsRef = new Firebase("https://m1sc.firebaseio.com/ionic_soccer/matches");
  return $firebaseArray(itemsRef);
})


.factory('Users', function($firebaseArray){
  var ref = new Firebase("https://m1sc.firebaseio.com/ionic_soccer/users");
  var fbArr = $firebaseArray(ref);
  
  return {
    all: function () {
      return fbArr;
    },
    get: function(gameId) {   
      
      return;
         
      for (var i = 0; i < FB_matches_arr.length; i++) {
        console.log(FB_matches_arr[i].$id);
        if (FB_matches_arr[i].$id === gameId) {
          return FB_matches_arr[i];
        }
        
      }
    },
    createUser: function(userObj) {
      ref.child(userObj.username).set(userObj);
    }
  };
  
})




;
