var newbeeTable;

angular.module('newbeeTable', []);

newbeeTable = function($window, $timeout) {
  return {
    replace: true,
    scope: {
      data: "=",
      config: "="
    },
    templateUrl: "src/table.html",
    link: function(scope, ele) {
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
      scope.normalConfigs = (function() {
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
      console.log($window);
      return $timeout(function() {
        var e, fix, i, j, k, len, len1, nor, ref, ref1, results;
        ref = scope.fixedConfigs;
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          fix = ref[i];
          e = ele.find('.fix-col-' + i);
          e.width(e.maxWidth());
        }
        ref1 = scope.normalConfigs;
        results = [];
        for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {
          nor = ref1[i];
          e = ele.find('.nor-col-' + i);
          results.push(e.width(e.maxWidth()));
        }
        return results;
      });
    }
  };
};

angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

$.fn.maxWidth = function() {
  var max;
  max = 0;
  this.each((function(_this) {
    return function(i, e) {
      if (_this.eq(i).width() > max) {
        return max = _this.eq(i).width();
      }
    };
  })(this));
  return max;
};
