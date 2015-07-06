var newbeeLeft, newbeeLeftTop, newbeeTable;

angular.module('newbeeTable', []);

angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

newbeeTable = function() {
  return {
    replace: true,
    scope: {
      data: "=",
      config: "=",
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
      }
    }
  };
};

angular.module('newbeeTable').directive('newbeeLeftTop', newbeeLeftTop);

newbeeLeftTop = function() {
  return {
    replace: true,
    scope: {
      config: "="
    },
    templateUrl: "src/left-top-table.html",
    link: function(scope) {
      return console.log(scope.config);
    }
  };
};

angular.module('newbeeTable').directive('newbeeLeft', newbeeLeft);

newbeeLeft = function() {
  return {
    replace: true,
    scope: {
      config: "="
    },
    templateUrl: "src/left-table.html",
    link: function(scope) {}
  };
};
