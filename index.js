var table = angular.module('table', ['newbeeTable']);
table.controller('table', ['$scope','$timeout','$sce', function($scope,$timeout,$sce) {
  $scope.data = [];
  $scope.config = [];

  $timeout(function(){
    $scope.config.shift()


  },4000)




  var labels = ['a', 'b', 'q', 'w', 'e', 't', 'y', 'r', 'i', 'h'];
  for (var i = 0; i < 20; i++) {
    var o = {};
    for (var j in labels) {
      o[labels[j]] = Math.random();
    }
    $scope.data.push(o);
  }
  for (var j in labels) {
    $scope.config.push({
      key: labels[j],
      label: labels[j],
      isFixed: j < 4,
      width:200,
      html:"src/test.html",
      show:j%2 is 0
    });
  }

}]);
