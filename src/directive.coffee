angular.module 'newbeeTable', []



newbeeTable = ($window,$timeout) ->
  replace: true
  scope:
    data: "="
    config: "="
  templateUrl: "src/table.html",
  compile:(tEle,tAttr)->
    height=$window.innerHeight-tEle.offset().top-60
    tEle.css('height',height+'px')

    (scope,ele) ->
      init=->
        scope.fixedConfigs = (c for c in scope.config when c.isFixed)
        scope.normalConfigs = (c for c in scope.config when !c.isFixed)
        $timeout ->
          for fix,i in scope.fixedConfigs when !fix.width?
            e=ele.find('.fix-col-'+i)
            e.width(e.maxWidth())
          for nor,i in scope.normalConfigs when !nor.width?
            e=ele.find('.nor-col-'+i)
            e.width(e.maxWidth())


      scope.$watchCollection 'config',(config)->
        init() if config


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




ngWidth=()->
  replace:true
  scope:true
  controller:($scope,$element,$attrs,$parse)->
    width=$parse($attrs.ngWidth)($scope)
    $element.width(width) if width?


angular.module('newbeeTable').directive 'ngWidth', ngWidth
angular.module('newbeeTable').directive 'newbeeTable', newbeeTable


$.fn.maxWidth=()->
  max=0
  @each (i,e)=>
    max=@eq(i).width() if @eq(i).width()>max
  max
