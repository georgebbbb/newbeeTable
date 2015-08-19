(function(module) {
try {
  module = angular.module('newbeeTable');
} catch (e) {
  module = angular.module('newbeeTable', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/test.html',
    '<a href="#">{{con.key}}</a>\n' +
    '');
}]);
})();
