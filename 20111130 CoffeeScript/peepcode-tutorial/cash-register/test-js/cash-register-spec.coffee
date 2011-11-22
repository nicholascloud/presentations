describe "Dish", ->

  describe "constructor", ->

    beforeEach ->
      @dish = new Dish 'Sirloin Steak $18.99 mains'

    it "extracts title", ->
      (expect @dish.title).toEqual('Sirloin Steak')

    it "extracts price", ->
      (expect @dish.price.cents).toEqual 1899
      (expect @dish.price.toString()).toEqual '$18.99'

    it "extracts tag", ->
      (expect @dish.tag).toEqual 'mains'

  describe "constructor with partial data", ->

    beforeEach ->
      @dish = new Dish 'Sirloin Steak $18.99'

    it "extracts title", ->
      (expect @dish.title).toEqual 'Sirloin Steak'

    it "extracts price", ->
      (expect @dish.price.toString()).toEqual '$18.99'

    it "leaves tag blank", ->
      (expect @dish.tag).toEqual ''

  describe "constructor with invalid data", ->

    beforeEach ->
      @dish = new Dish 'Sirloin Steak'

    it "extracts title", ->
      (expect @dish.title).toEqual 'Sirloin Steak'

    it "leaves price blank", ->
      (expect @dish.price.cents).toEqual 0

    it "leaves tag blank", ->
      (expect @dish.tag).toEqual ''

  describe "constructor with null description", ->

    beforeEach ->
      @dish = new Dish

    it "sets title to null", ->
      (expect @dish.title).toEqual ''


describe "Money", ->

  describe "constructor", ->

    describe "valid value", ->

      beforeEach ->
        @money = new Money '$15.99'

      it "extracts dollar and cents", ->
        (expect @money.cents).toEqual 1599

      it "formats as string", ->
        (expect @money.toString()).toEqual '$15.99'

    describe "invalid value", ->

      it "clips fractional part of cents to .99", ->
        @money = new Money '$15.909'
        (expect @money.cents).toEqual 1599

      it "uses zero if a money value can't be parsed", ->
        @money = new Money 'NOT A MONETARY VALUE'
        (expect @money.cents).toEqual 0


describe "Meal", ->

  beforeEach ->
    @donut = new Dish 'Maple Bacon Donut $1.99 #breakfast'
    @fish = new Dish 'Salmon Filet $14.99 #main'
    @dishes = [@donut, @fish]

  describe "starting blank", ->

    beforeEach ->
      @meal = new Meal

    it "adds a single dish", ->
      @meal.add @donut
      (expect @meal.dishes.length).toEqual(1)

    it "calculates total price", ->
      @meal.add @donut, @fish
      (expect @meal.totalPrice().cents).toEqual 1698

    it "updates total price when a new dish is added", ->
      (expect @meal.totalPrice().cents).toEqual 0
      @meal.add @donut
      (expect @meal.totalPrice().cents).toEqual 199
      @meal.add @fish
      (expect @meal.totalPrice().cents).toEqual 1698

    it "adds a list of dishes", ->
      @meal.add @donut, @fish
      (expect @meal.dishes.length).toEqual 2

