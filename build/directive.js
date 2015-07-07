var generateMaxWidth, newbeeLeft, newbeeLeftTop, newbeeMain, newbeeTable, newbeeTableFactory, newbeeTop;

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
        var j, len, ref, results;
        ref = scope.config;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          c = ref[j];
          if (c.isFixed) {
            results.push(c);
          }
        }
        return results;
      })();
      return scope.normalConfigs = (function() {
        var j, len, ref, results;
        ref = scope.config;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          c = ref[j];
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

newbeeLeftTop = function($timeout) {
  return {
    replace: true,
    scope: {
      config: "="
    },
    templateUrl: "src/top-table.html",
    link: function(scope, ele) {
      return $timeout(function() {
        var i, widths;
        i = 0;
        widths = newbeeTableFactory.fixedWidth;
        if (i != null) {
          generateMaxWidth(ele, i, widths, 'table>thead>tr', 'th');
        }
        return console.log(widths);
      });
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
        var i, widths;
        if (scope.data.length != null) {
          i = scope.data.length - 1;
        }
        widths = newbeeTableFactory.fixedWidth;
        console.log(widths, 333333);
        if (i != null) {
          return generateMaxWidth(ele, i, widths, 'table>tbody>tr', 'td');
        }
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

generateMaxWidth = function(ele, i, widths, selectorPre, selectorPost) {
  var tds, tr;
  tr = ele.find(selectorPre);
  tds = $(tr.get(i)).find(selectorPost);
  console.log(tds, widths);
  return tds.each(function(i, e) {
    var width;
    width = $(e).css('width');
    if ((widths[i] == null) || (width > widths[i])) {
      return widths[i] = width;
    }
  });
};
