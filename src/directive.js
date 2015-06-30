angular.module('newbeeTable').directive('newbeeTable', newbeeTable);

function newbeeTable() {
  return {
    replace: true,
    scope: {
      data: "=",
      config: "="
    },
    link: function(scope, ele) {
      scope.fixedConfigs = [];
      scope.normalConfigs = [];
      angular.forEach(config, function(value, key) {
        if (value.isFixed) {
          fixedConfigs.push(value);
        } else {
          normalConfigs.push(value);
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
