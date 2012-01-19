window.syntax = window.syntax or {}
window.syntax.klass = ->
 
  superclass = new MySuperclass('SU')
  superclass.log()
    
  subclass1 = new MySubclass('s1')
  subclass1.log()
    
  subclass2 = new MySubclass('s2')
  subclass2.log()
    
  subclass1.setName('s-1')
  subclass1.log()
  subclass2.log()
 

###
  classes
###

window.MySuperclass = class MySuperclass
  constructor: (@name) ->
    # @name becomes an instance property
    # @ means: `this` constructor
  
  # class (static) property
  # @ means: `this` class
  @classvar = 0
  
  # private instance property
  instancevar = 0
  
  # public/protected instance method
  prototypeMethod: -> 
    "<prototype method invoked, value of instancevar = #{instancevar ? '<whoops, undefined>'}>"
  
  # class (static) method
  # @ means: `this` class
  @classMethod: -> 
    "<class method invoked, value of instancevar = #{instancevar ? '<whoops, undefined>'}>"
  
  log: ->
    console.log 'MySuperclass.log() -------------'
    console.log "@name = #{@name}"
    console.log "MySuperclass.classvar = #{MySuperclass.classvar}"
    console.log "instancevar = #{instancevar}"
    console.log "@prototypeMethod() = #{@prototypeMethod()}"
    console.log "MySuperclass.classMethod() = #{MySuperclass.classMethod()}"
    
window.MySubclass = class MySubclass extends MySuperclass
  constructor: (name) ->
    super(name)
    MySuperclass.classvar++

  log: ->
    console.log 'MySubclass.log() ---------------'
    console.log "@name = #{@name}"
    console.log "instancevar = #{instancevar ? '<whoops, undefined>'}"
    console.log "MySuperclass.classvar = #{MySuperclass.classvar}"
    console.log "MySubclass.classvar = #{MySubclass.classvar}"
    console.log "@prototypeMethod() = #{@prototypeMethod()}"
    console.log "MySuperclass.classMethod() = #{MySuperclass.classMethod()}"
    console.log "MySubclass.classMethod() = #{MySubclass.classMethod()}"
  
  setName: (name) ->
    @name = name
    
