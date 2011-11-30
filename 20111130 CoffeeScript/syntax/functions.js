
  window.syntax = window.syntax || {};

  window.syntax["function"] = function() {
    /*
        Functions
    */
    var excited, func, sad, say;
    console.title('Functions are declared with a dash-rocket');
    func = function() {
      return console.log('inside a function');
    };
    func();
    console.title('Function arguments precede the dash-rocket');
    func = function(first, last) {
      return console.log("first = " + first + ", last = " + last);
    };
    func('Winston', 'Churchill');
    console.title('Parentheses may be omitted for functions with one or more arguments');
    func = function(city, state) {
      return console.log("" + city + ", " + state);
    };
    func('St. Louis', 'MO');
    console.title('Functions may be passed as arguments to other functions');
    excited = function(words) {
      return console.log("!!! " + words + " !!!");
    };
    sad = function(words) {
      return console.log("" + words + " :-(");
    };
    say = function(words, emotion) {
      return emotion(words);
    };
    say("It's my birthday", excited);
    say("It's my birthday", sad);
    console.title('Functions always return the value of the last expression');
    func = function() {
      return "this will be returned";
    };
    return console.log(func());
  };
