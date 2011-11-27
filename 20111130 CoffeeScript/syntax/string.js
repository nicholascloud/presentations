
  window.syntax = window.syntax || {};

  window.syntax.string = function() {
    /*
        Slicing
    */
    var cc, lastFour;
    console.title('slicing a string with a range');
    cc = '4111111111111111';
    console.log(cc);
    lastFour = cc.slice(-4);
    return console.log(lastFour);
  };
