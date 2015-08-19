(function(module) {
try {
  module = angular.module('newbeeTable');
} catch (e) {
  module = angular.module('newbeeTable', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/table.html',
    '<div>\n' +
    '\n' +
    '  <div class="top-left">\n' +
    '      <div ng-repeat="con in fixedConfigs" class="fix-col-{{$index}}">{{con.label}}</div>\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="top">\n' +
    '    <div class="panel">\n' +
    '      <div ng-repeat="con in normalConfigs" class="nor-col-{{$index}}">{{con.label}}</div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '  </div>\n' +
    '\n' +
    '  <div class="left">\n' +
    '    <div class="panel">\n' +
    '      <div  ng-repeat="row in data">\n' +
    '        <div ng-repeat="con in fixedConfigs" class="fix-col-{{$index}}">\n' +
    '          {{row[con.key]}}\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '  </div>\n' +
    '  <div class="main">\n' +
    '    <div class="panel">\n' +
    '\n' +
    '\n' +
    '    <div  ng-repeat="row in data">\n' +
    '      <div ng-repeat="con in normalConfigs" class="nor-col-{{$index}}">\n' +
    '        {{row[con.key]}}\n' +
    '      </div>\n' +
    '    </div>\n' +
    '      </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
