/*global define:true*/

define(['underscore'], function (_) {

  var _offers = [
    {
      id: 1,
      name: 'Felecia',
      pic: 'portrait1.jpg',
      category: 'art',
      title: 'Introduction to interpretive dance',
      description: "There is a dancer inside all of us, just waiting to get out.  I'm teaching a 5-day workshop on the basics of interpritive dance, that will culminate in a group performance at the Great Gazeebo by the river.",
      cost: 340.00
    },
    {
      id: 2,
      name: 'Candice',
      pic: 'portrait2.jpg',
      category: 'fashion',
      title: 'Want to be a model? I can teach you the breaks of the business.',
      description: "I spent 5 years in LA modeling for several high-profile agencies. If you want to break into this business, I can show you how.",
      cost: 250.00
    },
    {
      id: 3,
      name: 'Tricia',
      pic: 'portrait3.jpg',
      category: 'gardening',
      title: 'Keep your plants alive this summer',
      description: "I've been gardening and landscaping for six years now and I can show you how to turn your yard into a real paradise.",
      cost: 70.00
    },
    {
      id: 4,
      name: 'Carl',
      pic: 'portrait4.jpg',
      category: 'fitness',
      title: 'UR A WIMP DO SOMETHING ABOUT IT',
      description: "ARE YOU TIRED OF LOOKING BAD AT THE GYM? DO YOU WANT TO BE PUMPED LIKE ME? i CAN HELP CREATE A WORKOUT ROUTINE THAT IS RIGHT FOR YOU!!!",
      cost: 189.99
    },
    {
      id: 5,
      name: 'Sarah',
      pic: 'portrait5.jpg',
      category: 'education',
      title: 'I can help you improve your math scores',
      description: "I am a former math teacher, retired, looking to help students who are looking for math tutelage outside the classroom.",
      cost: 75.00
    },
    {
      id: 6,
      name: 'Melody',
      pic: 'portrait6.jpg',
      category: 'fitness',
      title: 'you can snowboard too!',
      description: "hi i'm melody and my passion is snowboarding! if you've never been, or just want to improve yourself, i can help you master this insanely fun sport!",
      cost: 90.00
    },
    {
      id: 7,
      name: 'Kurt',
      pic: 'portrait7.jpg',
      category: 'food',
      title: 'Gormet chef can show you the goods',
      description: "If you want to spice up your kitchen and learn how the real chefs prepare food, I'm your man. I can teach you, in four easy sessions, how to create mals that will stun and astonish.",
      cost: 180.00
    },
    {
      id: 8,
      name: 'Fezz',
      pic: 'portrait8.jpg',
      category: 'personal',
      title: 'Are you bad with the ladies? Fezz can help you.',
      description: "Face it, you cannot compete with Fezz. But I can show you how to be a charming stud for a very modest investment.",
      cost: 250.00
    },
    {
      id: 9,
      name: 'Sandy',
      pic: 'portrait9.jpg',
      category: 'music',
      title: "Piano teacher looking for students",
      description: "I've been a piano teacher for 8 years and have a master's degree in music. My rates are reasonable and I am willing to conduct lessons at my house or yours.",
      cost: 15.00
    },
    {
      id: 10,
      name: 'Kyle',
      pic: 'portrait10.jpg',
      category: 'technology',
      title: "You don't have to be scared of your computer!",
      description: "My name is Kyle and I've been using computers since I was 5. I can show you how to get the most out of your home PC, how to maintain it, and when to upgrade to the newest model.",
      cost: 60.00
    },
    {
      id: 11,
      name: 'Linda',
      pic: 'portrait11.jpg',
      category: 'spirituality',
      title: 'A little meditation is good for the soul',
      description: "Are you experiencing stress? Turmoil? Anger? I can teach you the seven steps of meditative enlightenment that can ease your frustrations and help you live a fulfilled life again.",
      cost: 224.00
    },
    {
      id: 12,
      name: 'Kaylee',
      pic: 'portrait12.jpg',
      category: 'writing',
      title: "Start that novel you've always wanted to write",
      description: "I recently graduated from college with a degree in Writing and a minor in English Literature. I've written and published several small books. I'd love to meet aspiring writers and help them bring their ideas to life!",
      cost: 90.00
    },
    {
      id: 13,
      name: 'Walter',
      pic: 'portrait13.jpg',
      category: 'music',
      title: 'Refinish your old guitar',
      description: "I refinish old guitars that I pick up at auctions or estate sales. I can show you how to make your old guitar sing again.",
      cost: 100.00
    },
    {
      id: 14,
      name: 'Amy',
      pic: 'portrait14.jpg',
      category: 'outdoors',
      title: 'Hiking, camping, outdoor cooking are just a click away!',
      description: "Our city has lots of wonderful outdoor experiences waiting for you to enjoy! In five hours I can teach you everything you need to know to get started in the great outdoors.",
      cost: 160.00
    },
    {
      id: 15,
      name: 'Mark',
      pic: 'portrait15.jpg',
      category: 'entertainment',
      title: 'Live music and your night life',
      description: "Want to impress your significant other with a tour of this city's finest live music events?  I'm your man.  I can help you find and schedule the best entertainment around.",
      cost: 30.00
    },
    {
      id: 16,
      name: 'Jeff',
      pic: 'portrait16.jpg',
      category: 'cars',
      title: 'Change your oil and your brakes at home',
      description: "Hi I'm a former mechanic and I can teach you how to do maintenance on your aging vehicle with relative ease.",
      cost: 70.00
    },
    {
      id: 17,
      name: 'Drew',
      pic: 'portrait17.jpg',
      category: 'technology',
      title: 'Web 2.0 social marketing network specialization',
      description: "Do you want to make big money on the internet? You CAN and I can show you HOW. We will leverage the .COMs and learn to specialize our SEOs with the power of Google!",
      cost: 499.99
    },
    {
      id: 18,
      name: 'Tom',
      pic: 'portrait18.jpg',
      category: 'photography',
      title: 'Shoot animals... with your camera',
      description: "I've been a nature photographer for 20 years -- looking to share my skills with anyone who wants to learn.",
      cost: 100.00
    },
    {
      id: 19,
      name: 'Oleg',
      pic: 'portrait19.jpg',
      category: 'urban',
      title: 'Want to know your way around public transit?  Give me a shout.',
      description: "I use public transit every day to get around the city. I know the best routes, modes of transportation, pick-up and drop-off points in the city. I can teach you how to be a public transit ninja.",
      cost: 50.00
    },
    {
      id: 20,
      name: 'David',
      pic: 'portrait20.jpg',
      category: 'art',
      title: 'I can teach you to paint!',
      description: "You know you've always wanted to learn how to paint. In four lessons I can turn you into a master artist!",
      cost: 150.00
    },
    {
      id: 21,
      name: 'Mileah',
      pic: 'portrait21.jpg',
      category: 'fashion',
      title: 'Your hair is your most precious asset.',
      description: 'I can show you how to give your hair full, lucious body all the time with my seven-stop program for hair rejuvenation.',
      cost: 95.99
    },
    {
      id: 22,
      name: 'Tom',
      pic: 'portrait22.jpg',
      category: 'career',
      title: 'Looking to make big sales? I can help.',
      description: 'Are you tired of performing poorly at work? Do you constantly tell yourself that "coffee is for closers"?  I can help you up your game and be the top-earning sales rep in your company.',
      cost: 499.00  
    },
    {
      id: 23,
      name: 'Veronica',
      pic: 'portrait23.jpg',
      category: 'entertainment',
      title: 'Belly dancing for fun and profit!',
      description: "Hi everyone! I run a belly dancing studio for novices who are looking to get into the art, and who aren't shy about the performing with others. I can get you started on the path to finding your true inner dancer!",
      cost: 225.00
    },
    {
      id: 24,
      name: 'Rebecca',
      pic: 'portrait24.jpg',
      category: 'education',
      title: 'Science major, willing to help run experiments',
      description: "I have some free time this semester and thought I would reach out to other science students who need help with experiments. My rates are reasonable and I have lots of lab experience.",
      cost: 55.00
    },
    {
      id: 25,
      name: 'Ramone',
      pic: 'portrait25.jpg',
      category: 'music',
      title: 'Drummer can show you how the pros do it',
      description: "Face it, you've always dreamed of twirling the sticks. Now's the time: I can teach you all you need to know about rocking out on the drums!",
      cost: 170.00
    }
  ];

  var cache = {
    fetchStore: function (key, fetchData) {
      if (this.hasOwnProperty(key)) return this[key];
      var data = fetchData();
      this[key] = data;
      return data;
    }
  };

  var searchResult = function (terms) {
    function F() {
      this.add = function (offer) {
        this.offers.push(offer);
        this.categories.push(offer.category);
        this.count += 1;
      };
    };

    F.prototype = {
      terms: terms,
      offers: [],
      categories: [],
      count: 0
    };

    return new F();
  };

  return {
    offers: {
      all: function () {
        return _offers;
      },
      random: function (howMany) {
        howMany = howMany || 3;
        if (howMany > _offers.length) {
          howMany = _offers.length;
        }
        var offers = [];
        while (offers.length < howMany) {

        }
      },
      single: function (id) {
        return _.find(_offers, function (offer) {
          offer.id === id;
        });
      },
      inCategories: function (categories) {
        var offers = [];
        _offers.forEach(function (offer) {
          if (!categories.contains(offer.category)) return;
          offers.push(offer);
        });
        return offers;
      },
      search: function (terms) {
        var terms = terms.split(' ');
        var result = searchResult(terms);

        for (var i in _offers) {
          if (!_offers.hasOwnProperty(i)) continue;
          var offer = _offers[i];
          if (terms.indexOf(offer.category) >= 0) {
            result.add(offer); continue;
          }

          for (var j in terms) {
            if (!terms.hasOwnProperty(j)) continue;
            var term = terms[j];

            var conditions = [
              (offer.name.indexOf(term) >= 0),
              (offer.description.indexOf(term) >= 0)
            ];
            
            if (conditions.contains(true)) {
              result.add(offer); break;
            }
          }
        }

        return Object.getPrototypeOf(result);
      }
    },

    categories: {
      all: function () {
        return cache.fetchStore('categories_all', function () {
          var categories = [];
          _offers.forEach(function (offer) {
            categories.push(offer.category);
          });
          return _.uniq(categories.sort(), true)
        });
      }
    }
  };

});