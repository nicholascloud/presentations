var Hamstring = {};
Hamstring.url = (function (location) {

  var _queryString = (location.search || '?').substr(1);
  var params = {};
  var pairs = _queryString.split('&');
  pairs.forEach(function (pair) {
    var parts = pair.split('=');
    params[parts[0]] = parts[1];
  });

  return {
    queryString: _queryString,
    param: function (key) {
      if (params.hasOwnProperty(key)) {
        return params[key];
      }
    }
  }
})(window.location);

/*
 * Hamstring modules
 */
Hamstring.modules = [];

Hamstring.ready = function (bodyid) {
  for (var i = 0; i < this.modules.length; i++) {
    var module = this.modules[i];
    if (module.handles(bodyid)) {
      module.init();
    }
  }
};

/*
 * Global operations for all pages
 */
Hamstring.modules.push((function all () {

  var _init = function () {
    $('.pickdate').datepicker();  
  };

  return {
    handles: function (bodyid) {
      return true;
    },
    init: _init
  };
})());

/*
 * Login
 */
Hamstring.modules.push((function login () {

  var setActionParams = function ($form) {
    var returnUrl = Hamstring.url.param('returnUrl');
    if (returnUrl) {
      if ($form.attr('action').indexOf(returnUrl) === -1) {
        $form.attr('action', $form.attr('action') + '?returnUrl=' + returnUrl);
      }
    }
  }

  var loginForm = function (selector) {
    var $form = $(selector);
    setActionParams($form);

    $form.find('a.submit').click(function (evt) {
      $(this).closest('form').submit();
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    });

    var $error = $('#loginerror');
    if (Hamstring.url.param('fail')) {
      $error.show();
    }
  };

  var _init = function () {
    loginForm('#loginform');
  };

  return {
    handles: function (bodyid) {
      return bodyid === 'login';
    },
    init: _init
  };
})());

/*
 * Add run
 */
Hamstring.modules.push((function myhamstring () {

  var _init = function () {
    var $section = $('#addrun');

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
  };

  return {
    handles: function (bodyid) {
      return ['myhamstring'].indexOf(bodyid) >= 0;
    },
    init: _init
  };
})());

/*
 * Document is ready
 */
$().ready(function () {
  Hamstring.ready($('body').attr('id'));
});