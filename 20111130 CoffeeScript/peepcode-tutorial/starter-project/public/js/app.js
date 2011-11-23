
  jQuery(function() {
    var meal, source, template,
      _this = this;
    meal = new Meal;
    source = ($('#meal-template')).html();
    template = Handlebars.compile(source);
    ($('#entry_form')).submit(function(event) {
      var dish;
      event.preventDefault();
      dish = new Dish(($('#entry')).val());
      meal.add(dish);
      ($('ul#meal')).html(template(meal.toJson()));
      return ($('#entry')).val('');
    });
    return ($('#entry')).focus();
  });
