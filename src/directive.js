angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

function newbeeTable() {
  return {
    replace: true,
    scope: {
      data: "=",
      config: "="
    },
    templateUrl:"src/table.html",
    link: function(scope, ele) {
      scope.fixedConfigs = [];
      scope.normalConfigs = [];
      console.log(scope);
      angular.forEach(scope.config, function(value, key) {
        if (value.isFixed) {
          scope.fixedConfigs.push(value);
        } else {
          scope.normalConfigs.push(value);
        }

      });


    }


  }
}



angular.module('newbeeTable').directive('newbeeMain', newbeeMain);

function newbeeMain() {
  return {
    replace: true,
    link: function(scope) {}

  }
}

angular.module('newbeeTable').directive('newbeeLeft', newbeeLeft);

function newbeeLeft() {
  return {
    replace: true,

  }
}

angular.module('newbeeTable').directive('newbeeTop', newbeeTop);

function newbeeTop() {
  return {
    replace: true,

  }
}

angular.module('newbeeTable').directive('newbeeLeftTop', newbeeLeftTop);

function newbeeLeftTop() {
  return {
    replace: true,

  }
}
