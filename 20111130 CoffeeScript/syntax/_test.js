window._test = window._test || function() {
  
  function Participant (name, age) {
    this.name = name;
    this.age = age;
  }
  
  Participant.prototype.canDrink = function () {
    return this.age >= 21;
  };
  
  Participant.prototype.toString = function() {
    return this.name + ' is ' + this.age + ' and ' +
      (this.canDrink() ? 'can' : "can't") + ' drink';
  }
  
  var p1 = new Participant('Bob', 18);
  var p2 = new Participant('Charlie', 24);
  
  console.log(p1.toString());
  console.log(p2.toString());
};
