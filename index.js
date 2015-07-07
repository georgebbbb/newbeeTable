var table = angular.module('table', ['newbeeTable']);
table.controller('table', ['$scope', function($scope) {
  $scope.data = [];
  $scope.config = [];
  var labels = ['a', 'b', 'q', 'w', 'e', 't', 'y', 'r', 'y', 'h'];
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
      isFixed: j < 3
    });
  }

}]);