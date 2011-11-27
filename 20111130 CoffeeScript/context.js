(function() {
  var drink, setTemp;

  drink = {};

  setTemp = function(temperature) {
    return this.temp = temperature;
  };

  setTemp.apply(drink, ['hot']);

  console.log(drink.temp);

}).call(this);
