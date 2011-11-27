(function() {
  var __slice = Array.prototype.slice;

  window.syntax = window.syntax || {};

  window.syntax.destructuring = function() {
    /*
        Destructuring (i.e., pattern matching)
    */
    var bronze, credentials, eps, gold, movie, oldest, others, pass, silver, snum, strong, title, tvshow, user, weak, year, _ref, _ref2, _ref3, _ref4;
    console.title('assigning multiple variables');
    _ref = ['Lydia', 'Thomas', 'Calvin'], gold = _ref[0], silver = _ref[1], bronze = _ref[2];
    console.log("gold = " + gold);
    console.log("silver = " + silver);
    console.log("bronze = " + bronze);
    console.title('swapping variable values');
    strong = 'steel';
    weak = 'paper';
    _ref2 = [weak, strong], strong = _ref2[0], weak = _ref2[1];
    console.log("strong = " + strong);
    console.log("weak = " + weak);
    console.title('using splats for catchall variable assignment');
    _ref3 = ['Rick', 'Shane', 'Lori', 'Carl'], oldest = _ref3[0], others = 2 <= _ref3.length ? __slice.call(_ref3, 1) : [];
    console.log("oldest = " + oldest);
    console.log("others = " + others);
    console.title('using object patterns to assign properties to variables');
    credentials = {
      username: 'user@website.com',
      password: '4*2hgG201_3=',
      domain: 'website.com'
    };
    user = credentials.username, pass = credentials.password;
    console.log("user = " + user);
    console.log("pass = " + pass);
    console.title('using shorthand object patterns to assign properties to variables');
    movie = {
      title: 'Memento',
      actors: ['Guy Pearce', 'Carrie Ann Moss'],
      year: 2000
    };
    title = movie.title, year = movie.year;
    console.log("title = " + title);
    console.log("year = " + year);
    console.title('using object and array patterns together');
    tvshow = {
      title: 'Big Bang Theory',
      seasons: [
        {
          number: 1,
          episodes: ['Pilot', 'The Big Bran Hypothesis', 'The Fuzzy Boots Corollary']
        }, {
          number: 2,
          episodes: ['The Bad Fish Paradigm', 'The Codpiece Topology', 'The Barbarian Sublimation']
        }
      ],
      actors: ['Johnny Galecki', 'Jim Parsons', 'Kaley Cuoco']
    };
    _ref4 = tvshow.seasons[0], snum = _ref4.number, eps = _ref4.episodes;
    console.log("snum = " + snum);
    return console.log("eps = " + eps);
  };

}).call(this);
