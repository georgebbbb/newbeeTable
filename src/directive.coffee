angular.module 'newbeeTable', []
angular.module('newbeeTable').directive 'newbeeTable', newbeeTable

newbeeTable = () ->
  replace: true
  scope:
    data: "="
    config: "="
    templateUrl:"src/table.html"
    link: (scope) ->
      scope.fixedConfigs = (c for c in scope.config when c.isFixed)
      scope.normalConfigs = (c for c in scope.config when !c.isFixed)


angular.module('newbeeTable').directive 'newbeeLeftTop', newbeeLeftTop

newbeeLeftTop = () ->
  replace:true,
  scope :
    config : "="
  templateUrl : "src/left-top-table.html"
  link : (scope) ->
    console.log scope.config




angular.module('newbeeTable').directive 'newbeeLeft', newbeeLeft

newbeeLeft = () ->
  replace:true
  scope:
    config: "="
  templateUrl:"src/left-table.html"
  link: (scope) ->
      
      


