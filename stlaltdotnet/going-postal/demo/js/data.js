/*global define:true*/

define(['underscore'], function (_) {

  return {
    members: {
      all: function () {
        return _members;
      }
    },

    topics: {
      all: function () {
        return _topics;
      }
    }
  };

  var _members = [
    {
      name: 'Felecia',
      pic: 'portrait1.jpg',
      offers: [
        {
          category: 'art',
          title: 'Introduction to interpretive dance',
          description: "There is a dancer inside all of us, just waiting to get out.  I'm teaching a 5-day workshop on the basics of interpritive dance, that will culminate in a group performance at the Great Gazeebo by the river.",
          cost: 340.00
        }
      ]
    },
    {
      name: 'Candice',
      pic: 'portrait2.jpg',
      offers: [
        {
          category: 'photography',
          title: 'Need assistant photographers, willing to train',
          
        }
      ]
    },
    {
      name: 'Tricia',
      pic: 'portrait3.jpg',
      offers: [
      ]
    },
    {
      name: 'Carl',
      pic: 'portrait4.jpg',
      offers: [
      ]
    },
    {
      name: 'Sarah',
      pic: 'portrait5.jpg',
      offers: [
      ]
    },
    {
      name: 'Melody',
      pic: 'portrait6.jpg',
      offers: [
      ]
    },
    {
      name: 'Kurt',
      pic: 'portrait7.jpg',
      offers: [
      ]
    },
    {
      name: 'Julio',
      pic: 'portrait8.jpg',
      offers: [
      ]
    },
    {
      name: 'Sandy',
      pic: 'portrait9.jpg',
      offers: [
      ]
    },
    {
      name: 'Kyle',
      pic: 'portrait10.jpg',
      offers: [
        {
          category: ''
        }
      ]
    },
    {
      name: 'Linda',
      pic: 'portrait11.jpg',
      offers: [
        {
          category: 'spirituality',
          title: 'A little meditation is good for the soul',
          description: "Are you experiencing stress? Turmoil? Anger? I can teach you the seven steps of meditative enlightenment that can ease your frustrations and help you live a fulfilled life again.",
          cost: 224.00
        }
      ]
    },
    {
      name: 'Kaylee',
      pic: 'portrait12.jpg',
      offers: [
        {
          category: 'writing',
          title: "Start that novel you've always wanted to write",
          description: "I recently graduated from college with a degree in Writing and a minor in English Literature. I've written and published several small books. I'd love to meet aspiring writers and help them bring their ideas to life!",
          cost: 90.00
        }
      ]
    },
    {
      name: 'Walter',
      pic: 'portrait13.jpg',
      offers: [
        {
          category: 'music',
          title: 'Refinish your old guitar',
          description: "I refinish old guitars that I pick up at auctions or estate sales. I can show you how to make your old guitar sing again.",
          cost: 100.00
        }
      ]
    },
    {
      name: 'Amy',
      pic: 'portrait14.jpg',
      offers: [
        {
          category: 'outdoors',
          title: 'Hiking, camping, outdoor cooking are just a click away!',
          description: "Our city has lots of wonderful outdoor experiences waiting for you to enjoy! In five hours I can teach you everything you need to know to get started in the great outdoors.",
          cost: 160.00
        }
      ]
    },
    {
      name: 'Mark',
      pic: 'portrait15.jpg',
      offers: [
        {
          category: 'entertainment',
          title: 'Live music and your night life',
          description: "Want to impress your significant other with a tour of this city's finest live music events?  I'm your man.  I can help you find and schedule the best entertainment around.",
          cost: 30.00
        }
      ]
    },
    {
      name: 'Jeff',
      pic: 'portrait16.jpg',
      offers: [
        {
          category: 'cars',
          title: 'Change your oil and your brakes at home',
          description: "Hi I'm a former mechanic and I can teach you how to do maintenance on your aging vehicle with relative ease.",
          cost: 70.00
        }
      ]
    },
    {
      name: 'Drew',
      pic: 'portrait17.jpg',
      offers: [
        {
          category: 'technology',
          title: 'Web 2.0 social marketing network specialization',
          description: "Do you want to make big money on the internet? You CAN and I can show you HOW. We will leverage the .COMs and learn to specialize our SEOs with the power of Google!",
          cost: 499.99
        }
      ]
    },
    {
      name: 'Tom',
      pic: 'portrait18.jpg',
      offers: [
        {
          category: 'photography',
          title: 'Shoot animals... with your camera',
          description: "I've been a nature photographer for 20 years -- looking to share my skills with anyone who wants to learn.",
          cost: 100.00
        }
      ]
    },
    {
      name: 'Oleg',
      pic: 'portrait19.jpg',
      offers: [
        {
          category: 'urban',
          title: 'Want to know your way around public transit?  Give me a shout.',
          description: "I use public transit every day to get around the city. I know the best routes, modes of transportation, pick-up and drop-off points in the city. I can teach you how to be a public transit ninja.",
          cost: 50.00
        }
      ]
    },
    {
      name: 'David',
      pic: 'portrait20.jpg',
      offers: [
        {
          category: 'art',
          title: 'I can teach you to paint!',
          description: "You know you've always wanted to learn how to paint. In four lessons I can turn you into a master artist!",
          cost: 150.00
        }
      ]
    }
  ];

});