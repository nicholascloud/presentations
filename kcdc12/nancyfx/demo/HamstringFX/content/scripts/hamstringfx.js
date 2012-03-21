$().ready(function () {

  var addRun = (function (selector) {

    var $section = $(selector);

    var submitForm = function (onSuccess, onError) {
      onSuccess = onSuccess || function () {};
      onError = onError || function () {};

      var formData = {
        when: $section.find('[name=when]').val(),
        where: $section.find('[name=where]').val(),
        hour: $section.find('[name=hour]').val(),
        min: $section.find('[name=min]').val(),
        sec: $section.find('[name=sec]').val()
      };

      $.post('', formData, function () {
        onSuccess();
      }).error(function () {
        onError();
      });
    };

    $section.find('a.submit').click(function (evt) {

      evt.stopPropagation();
      evt.preventDefault();
      return false;
    });

  })('#addrun');

});