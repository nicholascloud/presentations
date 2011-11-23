jQuery ->
  meal = new Meal
  source = ($ '#meal-template').html()
  template = Handlebars.compile source
  
  ($ '#entry_form').submit (event) =>
    event.preventDefault()
    dish = new Dish ($ '#entry').val()
    meal.add dish
    ($ 'ul#meal').html(template meal.toJson())
    ($ '#entry').val('')
  
  
  ($ '#entry').focus()
