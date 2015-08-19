angular.module 'newbeeTable', []



newbeeTable = ($window,$timeout) ->
  replace: true
  scope:
    data: "="
    config: "="
  templateUrl: "src/table.html",

  link: (scope,ele) ->
    scope.fixedConfigs = (c for c in scope.config when c.isFixed)
    scope.normalConfigs = (c for c in scope.config when !c.isFixed)
    $timeout ->
      for fix,i in scope.fixedConfigs
        e=ele.find('.fix-col-'+i)
        e.width(e.maxWidth())
      for nor,i in scope.normalConfigs
        e=ele.find('.nor-col-'+i)
        e.width(e.maxWidth())
      mainPanel = ele.find('div.main')
      topPanel = ele.find('div.top>div.panel')
      leftPanel=ele.find('div.left>div.panel')
      sl=0
      st=0
      mainPanel.scroll ()->
        scrollLeft=mainPanel.scrollLeft()
        scrollTop=mainPanel.scrollTop()
        unless sl is scrollLeft
          topPanel.css 'left',-scrollLeft
          sl=scrollLeft

        unless st is scrollTop
          leftPanel.css 'top',-scrollTop
          st=scrollTop


angular.module('newbeeTable').directive 'newbeeTable', newbeeTable


$.fn.maxWidth=()->
  max=0
  @each (i,e)=>
    max=@eq(i).width() if @eq(i).width()>max
  max
