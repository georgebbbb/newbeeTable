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


angular.module('newbeeTable').directive 'newbeeTable', newbeeTable


newbeeLeftTop = ($timeout,newbeeTableFactory) ->
  replace:true,
  scope :
    config : "="
  templateUrl : "src/top-table.html"
  link : (scope,ele) ->
    $timeout ->
      newbeeTableFactory.generateMaxFixedWidth ele,0,'table>thead>tr','th'



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
      newbeeTableFactory.generateMaxFixedWidth ele,i,'table>tbody>tr','td' if i?





angular.module('newbeeTable').directive 'newbeeLeft', newbeeLeft


newbeeTop = ($timeout,newbeeTableFactory) ->
  replace:true
  scope:
    config: "="
    data: "="
  templateUrl:"src/top-table.html"
  link: (scope,ele) ->
    $timeout ->
      newbeeTableFactory.generateMaxNormalWidth ele,0,'table>thead>tr','th'



angular.module('newbeeTable').directive 'newbeeTop', newbeeTop



newbeeMain = ($timeout,newbeeTableFactory) ->
  replace:true
  scope:
    config: "="
    data: "="
  templateUrl:"src/main-table.html"
  link: (scope,ele) ->
    $timeout ->
      i=scope.data.length-1 if scope.data.length?
      newbeeTableFactory.generateMaxNormalWidth ele,i,'table>tbody>tr','td' if i


angular.module('newbeeTable').directive 'newbeeMain', newbeeMain




newbeeTableFactory = () ->
  fixedWidth:[]
  normalWidth : []
  generateMaxFixedWidth :(ele,i,selectorPre,selectorPost)->
    generateMaxWidth ele,i,this.fixedWidth,selectorPre,selectorPost
  generateMaxNormalWidth :(ele,i,selectorPre,selectorPost) ->
    generateMaxWidth ele,i,this.normalWidth,selectorPre,selectorPost
    console.log this.normalWidth


angular.module('newbeeTable').factory 'newbeeTableFactory',newbeeTableFactory

generateMaxWidth =(ele,i,widths,selectorPre,selectorPost)->
  tr = ele.find selectorPre
  tds = $(tr.get(i)).find selectorPost
  tds.each (i,e)->
    e=$ e
    width = e.css 'width'
    if !widths[i]?
      widths[i]=
        width : width
        ele   : e
    else if pxCompare width,widths[i].width
      widths[i].width = width
      pxCompare width,width
      widths[i].ele.css('width',width)
    else if !pxCompare width,widths[i].width
      e.css 'width',width


pxCompare =(a,b)->
  parseInt(a)>parseInt(b)


