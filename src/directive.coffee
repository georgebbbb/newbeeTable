angular.module 'newbeeTable', []

newbeeTable = () ->
  replace: true
  scope:
    data: "="
    config: "="
  templateUrl:"src/table.html"
  link: (scope) ->
    scope.fixedConfigs = (c for c in scope.config when c.isFixed)
    scope.normalConfigs = (c for c in scope.config when !c.isFixed)
  controller: ($scope) ->
    this.fixedWidth = []
    this.normalWidth = []

angular.module('newbeeTable').directive 'newbeeTable', newbeeTable


newbeeLeftTop = () ->
  replace:true,
  scope :
    config : "="
  templateUrl : "src/top-table.html"
  link : (scope) ->
    console.log scope.config


angular.module('newbeeTable').directive 'newbeeLeftTop', newbeeLeftTop



newbeeLeft = ($timeout,newbeeTableFactory) ->
  replace:true
  scope:
    config: "="
    data: "="
  templateUrl:"src/main-table.html"
  link: (scope,ele,attr) ->
    $timeout ->
      tr = ele.find('table>tbody>tr')
      tds = angular.element(tr.get(scope.data.length-1 if scope.data.length?))
      newbeeTableFactory.fixedWidth.push td.css('width')  for td in tds


angular.module('newbeeTable').directive 'newbeeLeft', newbeeLeft


newbeeTop = () ->
  replace:true
  scope:
    config: "="
    data: "="
  templateUrl:"src/top-table.html"
  link: (scope) ->
    console.log scope.data

angular.module('newbeeTable').directive 'newbeeTop', newbeeTop



newbeeMain = () ->
  replace:true
  scope:
    config: "="
    data: "="
  templateUrl:"src/main-table.html"
  link: (scope) ->

    
      
angular.module('newbeeTable').directive 'newbeeMain', newbeeMain




newbeeTableFactory = () ->
  fixedWidth:[]
  normalWidth : []

angular.module('newbeeTable').factory 'newbeeTableFactory',newbeeTableFactory
