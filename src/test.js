
exampleOne=()->
  replace:true
  scope:{}
  transclude:true
  template:"""
  <div>1111 <div example-two>
  </div></div>
  """
  compile:()->
    console.log("1")
    (scope)->
      console.log("1l")
  controller:()->
    console.log "1c"



exampleTwo=()->
  scope:{}
  replace:true
  transclude: true
  template:"""

  <div>222 <div example-three>
  </div></div>
  """
  compile:(tElement,tAttr,transcludeFn)->

    console.log("2")
    (scope,iEle,iattr,ctrl)->
      # transcludeFn scope, ()->
      #   console.log "2t"
      # iEle.append("<div example-three></div>")
      console.log("2l")
  controller:()->
    console.log "2c"

exampleThree=()->
  scope:{}
  replace:true
  transclude:true
  template:"""
  <div>333</div>
  """
  compile:()->
    console.log("3")
    (scope)->
      console.log("3l")
  controller:()->
    console.log "3c"



angular.module('newbeeTable').directive 'exampleOne', exampleOne
angular.module('newbeeTable').directive 'exampleTwo', exampleTwo
angular.module('newbeeTable').directive 'exampleThree', exampleThree


createDirective=(name)->
  ->
    restrict: 'E,A',
    transclude: true,
    replace:true,
    template: '<div ng-transclude></div>',
    compile: (tElem, tAttrs)->
      console.log(name + ': compile')
      {
        pre: (scope, iElem, iAttrs)->
          console.log(name + ': pre link')

        post: (scope, iElem, iAttrs)->
          console.log(name + ': post link')


      }





angular.module('newbeeTable').directive('levelOne', createDirective('levelOne'))
angular.module('newbeeTable').directive('levelTwo', createDirective('levelTwo'))
angular.module('newbeeTable')
.directive('levelThree',createDirective('levelThree'))
