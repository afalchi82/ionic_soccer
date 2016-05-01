angular.module('starter.controllers', [])

.controller('GridCtrl', function($scope) {  
  $scope.franco = 'Ciccio';  
})

.controller('ListCtrl', function($scope){
  
  $scope.shouldShowDelete = false;
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;
  
  $scope.players = [
    {
      img: 'http://lorempixel.com/400/200/sports',
      title: 'title1',
      description: 'description1'
    },
    {
      img: 'http://lorempixel.com/400/200/city',
      title: 'title 2',
      description: 'description 2'
    },
    {
      img: 'http://lorempixel.com/400/200/cats',
      title: 'title1',
      description: 'description1'
    },
    {
      img: 'http://lorempixel.com/400/200/fashion',
      title: 'title 2',
      description: 'description 2'
    },
  ];
})

.controller('DashCtrl', function($scope) {})

.controller('PlayersCtrl', function($scope, Players, $log) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.players = Players.all();
  $scope.remove = function(player) {
    Players.remove(player);
  };
  
  $scope.log = function(player) {
    $log.log(player);
  };
  
})

.controller('PlayerDetailCtrl', function($scope, $stateParams, Players, $log) {
  $log(Players.length);
  $scope.players = Players.get($stateParams.playerId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
