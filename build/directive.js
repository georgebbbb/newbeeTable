var newbeeLeft, newbeeLeftTop, newbeeMain, newbeeTable, newbeeTableFactory, newbeeTop;

angular.module('newbeeTable', []);

newbeeTable = function() {
  return {
    replace: true,
    scope: {
      data: "=",
      config: "="
    },
    templateUrl: "src/table.html",
    link: function(scope) {
      var c;
      scope.fixedConfigs = (function() {
        var i, len, ref, results;
        ref = scope.config;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          if (c.isFixed) {
            results.push(c);
          }
        }
        return results;
      })();
      return scope.normalConfigs = (function() {
        var i, len, ref, results;
        ref = scope.config;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          if (!c.isFixed) {
            results.push(c);
          }
        }
        return results;
      })();
    },
    controller: function($scope) {
      this.fixedWidth = [];
      return this.normalWidth = [];
    }
  };
};

angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

newbeeLeftTop = function() {
  return {
    replace: true,
    scope: {
      config: "="
    },
    templateUrl: "src/top-table.html",
    link: function(scope) {
      return console.log(scope.config);
    }
  };
};

angular.module('newbeeTable').directive('newbeeLeftTop', newbeeLeftTop);

newbeeLeft = function($timeout, newbeeTableFactory) {
  return {
    replace: true,
    scope: {
      config: "=",
      data: "="
    },
    templateUrl: "src/main-table.html",
    link: function(scope, ele, attr) {
      return $timeout(function() {
        var i, len, results, td, tds, tr;
        tr = ele.find('table>tbody>tr');
        tds = angular.element(tr.get(scope.data.length != null ? scope.data.length - 1 : void 0));
        results = [];
        for (i = 0, len = tds.length; i < len; i++) {
          td = tds[i];
          results.push(newbeeTableFactory.fixedWidth.push(td.css('width')));
        }
        return results;
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeLeft', newbeeLeft);

newbeeTop = function() {
  return {
    replace: true,
    scope: {
      config: "=",
      data: "="
    },
    templateUrl: "src/top-table.html",
    link: function(scope) {
      return console.log(scope.data);
    }
  };
};

angular.module('newbeeTable').directive('newbeeTop', newbeeTop);

newbeeMain = function() {
  return {
    replace: true,
    scope: {
      config: "=",
      data: "="
    },
    templateUrl: "src/main-table.html",
    link: function(scope) {}
  };
};

angular.module('newbeeTable').directive('newbeeMain', newbeeMain);

newbeeTableFactory = function() {
  return {
    fixedWidth: [],
    normalWidth: []
  };
};

angular.module('newbeeTable').factory('newbeeTableFactory', newbeeTableFactory);
