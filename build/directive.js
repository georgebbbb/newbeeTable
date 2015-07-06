var newbeeLeft, newbeeLeftTop, newbeeTable;

angular.module('newbeeTable', []);

angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

newbeeTable = function() {
  return {
    replace: true,
    scope: {
      data: "=",
      config: "="
    },
    templateUrl: "src/table.html",
    link: function(scope) {
      

    }
  };
};

