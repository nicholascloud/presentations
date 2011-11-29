var MyFunc = (function () {
  
  function MyFunc1() {
    console.log(typeof(this));
  }
  
  MyFunc1.prototype.bar = function() {
    console.log(typeof(this));
  }
  
  return MyFunc1;
  
})();

var f = new MyFunc();
console.log(f.bar());
