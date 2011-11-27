(function() {
  var Dog, cat, dog1, dog2, horse, pig, setName;

  setName = function(name) {
    return this.name = name;
  };

  cat = {};

  cat.setName = setName;

  cat.setName('Mittens');

  console.log(cat.name);

  pig = {};

  setName.apply(pig, ['Babe']);

  console.log(pig.name);

  horse = {};

  cat.setName.apply(horse, ['Mr. Ed']);

  console.log(horse.name);

  Dog = setName;

  dog1 = new Dog('Jimmy');

  dog2 = new Dog('Jake');

  console.log(dog1.name);

  console.log(dog2.name);

  setName('Lulu');

  console.log(name);

  console.log(this.name);

}).call(this);
