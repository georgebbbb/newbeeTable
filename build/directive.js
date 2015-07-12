var generateMaxWidth, newbeeGrid, newbeeLeft, newbeeLeftTop, newbeeMain, newbeeTable, newbeeTableFactory, newbeeTop, pxCompare;

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
    }
  };
};

angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

newbeeGrid = function($timeout) {
  return {
    controller: function() {},
    link: function(scope) {
      return $timeout(function() {
        return console.log(666);
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeGrid', newbeeGrid);

newbeeLeftTop = function($timeout, newbeeTableFactory) {
  return {
    replace: true,
    scope: {
      config: "="
    },
    templateUrl: "src/top-table.html",
    link: function(scope, ele) {
      return $timeout(function() {
        return newbeeTableFactory.generateMaxFixedWidth(ele, 0, null, 'div');
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeLeftTop', newbeeLeftTop);

newbeeLeft = function($timeout, newbeeTableFactory, $window) {
  return {
    replace: true,
    scope: {
      config: "=",
      data: "="
    },
    templateUrl: "src/main-table.html",
    link: function(scope, ele, attr) {
      return $timeout(function() {
        var i;
        if (scope.data.length != null) {
          i = scope.data.length - 1;
        }
        if (i != null) {
          newbeeTableFactory.generateMaxFixedWidth(ele, i, 'table>tbody>tr', 'td');
        }
        ele.css('height', $window.innerHeight - ele.offset().top);
        return newbeeTableFactory.moveLeftEle = function(distance) {
          return ele.find('table.table').css('top', distance + 'px');
        };
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeLeft', newbeeLeft);

newbeeTop = function($timeout, newbeeTableFactory) {
  return {
    replace: true,
    scope: {
      config: "=",
      data: "="
    },
    templateUrl: "src/top-table.html",
    link: function(scope, ele) {
      return $timeout(function() {
        newbeeTableFactory.generateMaxNormalWidth(ele, 0, null, 'div');
        return newbeeTableFactory.moveTopEle = function(distance) {
          return ele.children().css('left', distance + 'px');
        };
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeTop', newbeeTop);

newbeeMain = function($timeout, newbeeTableFactory, $window) {
  return {
    replace: true,
    scope: {
      config: "=",
      data: "="
    },
    templateUrl: "src/main-table.html",
    link: function(scope, ele) {
      return $timeout(function() {
        var i, left, top;
        if (scope.data.length != null) {
          i = scope.data.length - 1;
        }
        if (i) {
          newbeeTableFactory.generateMaxNormalWidth(ele, i, 'table>tbody>tr', 'td');
        }
        ele.css('height', $window.innerHeight - ele.offset().top);
        top = ele.scrollTop();
        left = ele.scrollLeft();
        return ele.scroll(function() {
          var activeLeft, activeTop;
          activeTop = ele.scrollTop();
          activeLeft = ele.scrollLeft();
          if (left !== activeLeft) {
            newbeeTableFactory.moveTopEle(left - activeLeft);
          }
          if (top !== activeTop) {
            return newbeeTableFactory.moveLeftEle(top - activeTop);
          }
        });
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeMain', newbeeMain);

newbeeTableFactory = function() {
  return {
    fixedWidth: [],
    normalWidth: [],
    generateMaxFixedWidth: function(ele, i, selectorPre, selectorPost) {
      return generateMaxWidth(ele, i, this.fixedWidth, selectorPre, selectorPost);
    },
    generateMaxNormalWidth: function(ele, i, selectorPre, selectorPost) {
      return generateMaxWidth(ele, i, this.normalWidth, selectorPre, selectorPost);
    }
  };
};

angular.module('newbeeTable').factory('newbeeTableFactory', newbeeTableFactory);

generateMaxWidth = function(ele, i, widths, selectorPre, selectorPost) {
  var tds, tr;
  tr = selectorPre != null ? ele.find(selectorPre) : ele;
  tds = $(tr.get(i)).find(selectorPost);
  return tds.each(function(i, e) {
    var width;
    e = $(e);
    width = e.css('width');
    if (widths[i] == null) {
      return widths[i] = {
        width: width,
        ele: e
      };
    } else if (pxCompare(width, widths[i].width)) {
      widths[i].width = width;
      return widths[i].ele.css('width', width);
    } else if (!pxCompare(width, widths[i].width)) {
      return e.css('width', width);
    }
  });
};

pxCompare = function(a, b) {
  return parseInt(a) > parseInt(b);
};
