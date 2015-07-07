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


newbeeLeftTop = ($timeout) ->
  replace:true,
  scope :
    config : "="
  templateUrl : "src/top-table.html"
  link : (scope,ele) ->
    $timeout ->
      i=0
      widths =newbeeTableFactory.fixedWidth
      generateMaxWidth ele,i,widths,'table>thead>tr','th' if i?
      console.log(widths)


angular.module('newbeeTable').directive 'newbeeLeftTop', newbeeLeftTop



newbeeLeft = ($timeout,newbeeTableFactory) ->
  replace:true
  scope:
    config: "="
    data: "="
  templateUrl:"src/main-table.html"
  link: (scope,ele,attr) ->
    $timeout ->
      i=scope.data.length-1 if scope.data.length?
      widths =newbeeTableFactory.fixedWidth
      console.log widths,333333
      generateMaxWidth ele,i,widths,'table>tbody>tr','td' if i?


        


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

generateMaxWidth =(ele,i,widths,selectorPre,selectorPost)->
  tr = ele.find selectorPre
  tds = $(tr.get(i)).find selectorPost
  console.log tds,widths
  tds.each (i,e)->
    width = $(e).css 'width'
    widths[i]=width if (!widths[i]?)||(width>widths[i])
    
