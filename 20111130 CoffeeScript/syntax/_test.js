function outer() {
	
	//outer.foo = function() {return "outer.foo";}
	
	function inner() {
	  //this.foo = function() {return "inner.foo";}
		
    this.log = function() {
      console.log('inner');
      console.log(this);
    };
	};
	
	outer.log = function() {
	  console.log('outer');
	  console.log(this);
	};
	
	return new inner();
};
