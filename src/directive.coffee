angular.module 'newbeeTable', []



newbeeTable = ($window,$timeout) ->
  replace: true
  scope:
    data: "="
    config: "="
  templateUrl:"src/table.html"
  link: (scope,ele) ->
    scope.fixedConfigs = (c for c in scope.config when c.isFixed)
    scope.normalConfigs = (c for c in scope.config when !c.isFixed)
    console.log $window
    $timeout ->
      for fix,i in scope.fixedConfigs
        e=ele.find('.fix-col-'+i)
        e.width(e.maxWidth())
      for nor,i in scope.normalConfigs
        e=ele.find('.nor-col-'+i)
        e.width(e.maxWidth())




angular.module('newbeeTable').directive 'newbeeTable', newbeeTable


$.fn.maxWidth=()->
  max=0
  @each (i,e)=>
    max=@eq(i).width() if @eq(i).width()>max
  max
