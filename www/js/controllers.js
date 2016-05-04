angular.module('starter.controllers', ['firebase'])



.controller('ListCtrl', function($scope){
  
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;  
  
})

.controller('DashCtrl', function($rootScope, $scope, Users) {
  $rootScope.user = {
    username: ''
  };
  
  $scope.createUser = function() {
    Users.createUser($rootScope.user);
  };
  
})

.controller('GamesCtrl', function($scope, Games) {
  $scope.games = Games.all();
  
  $scope.match = {};
  
  $scope.saveNewMatch = function(){
    Games.saveNewMatch($scope.match);
  };
  
  $scope.remove = function(obj){
    Games.removeMatch(obj);
  };
  
})
.controller('GameDetailCtrl', function($scope, $stateParams, Games) {
  $scope.game = Games.get($stateParams.gameId);
})

.controller('PlayersCtrl', function($scope, Users) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.players = Users.all();
  $scope.remove = function(player) {
    Players.remove(player);
  };
  
  // Reorder items
  $scope.moveItem = function(item, fromIndex, toIndex) {
    //Move the item in the array
    $scope.players.splice(fromIndex, 1);
    $scope.players.splice(toIndex, 0, item);
  };
  
  $scope.log = function (item) {
    console.log(item);
  };
  
  
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, Users) {
  $scope.player = Users.get($stateParams.playerId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
