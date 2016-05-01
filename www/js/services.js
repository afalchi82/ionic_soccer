angular.module('starter.services', ['firebase'])

.factory('Players', function($firebaseArray) {
  // Might use a resource here that returns a JSON array
  var itemsRef = new Firebase("https://afalch.firebaseio.com/calcetto");
  var players = $firebaseArray(itemsRef);

  // Some fake testing data
  var playersOld = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    stats: [
      {name: 'games', value:0},
      {name: 'victories', value:0},
      {name: 'draws', value:0},
      {name: 'defeats', value:0},
      {name: 'goals', value:0}
    ]
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    stats: [
      {name: 'games', value:0},
      {name: 'victories', value:0},
      {name: 'draws', value:0},
      {name: 'defeats', value:0},
      {name: 'goals', value:0}
    ]
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    stats: [
      {name: 'games', value:0},
      {name: 'victories', value:0},
      {name: 'draws', value:0},
      {name: 'defeats', value:0},
      {name: 'goals', value:0}
    ]
  }];

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

.factory('Games', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var games = [
    {
      id: 0,
      date: '07/05/2016',
      location: 'Athletic Club',
      time: '7PM'
    },
    {
      id: 1,
      date: '07/05/2016',
      location: 'Athletic Club',
      time: '7PM'
    },
    {
      id: 2,
      date: '07/05/2016',
      location: 'Athletic Club',
      time: '7PM'
    }
  ];

  return {
    all: function() {
      return games;
    },
    get: function(gameId) {
      for (var i = 0; i < games.length; i++) {
        if (games[i].id === parseInt(gameId)) {
          return games[i];
        }
      }
      return null;
    }
  };
})

;
