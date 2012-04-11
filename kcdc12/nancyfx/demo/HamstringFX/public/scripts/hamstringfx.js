//global: postal, $

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
      module.init(postal);
    }
  }
};

/*
 * Global operations for all pages
 */
Hamstring.modules.push(function all () {

  var _init = function () {
    $('.pickdate').datepicker();  
  };

  return {
    handles: function (bodyid) {
      return true;
    },
    init: _init
  };
}());

/*
 * Login
 */
Hamstring.modules.push(function login () {

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
}());

/*
 * Add run
 */
Hamstring.modules.push(function addRun () {

  var fields = {
    when: '[name=when]',
    where: '[name=where]',
    hour: '[name=hour]',
    min: '[name=min]',
    sec: '[name=sec]'
  };

  var _init = function (bus) {
    var $section = $('#addrun');
    var $error = $section.find('#addrunerror');

    var submitForm = function (onSuccess, onError) {
      onSuccess = onSuccess || function () {};
      onError = onError || function () {};

      var formData = {
        when: $section.find(fields.when).val(),
        where: $section.find(fields.where).val(),
        hour: $section.find(fields.hour).val(),
        min: $section.find(fields.min).val(),
        sec: $section.find(fields.sec).val()
      };

      $.post('/run', formData, function () {
        onSuccess();
      }).error(function (e) {
        onError();
      });
    };

    var resetForm = function () {
      $section.find(fields.when).val('');
      $section.find(fields.where)[0].selectedIndex = 0;
      $section.find(fields.hour).val('0');
      $section.find(fields.min).val('0');
      $section.find(fields.sec).val('0');
      $error.hide();
    };

    $section.find('a.submit').click(function (evt) {
      $error.hide();
      submitForm(function onSuccess () {
        bus.publish('run-added', {});
        resetForm();
      }, function onError (message) {
        $error.find('span').html(message);
        $error.show();
      });
      evt.stopPropagation();
      evt.preventDefault();
      return false;
    });
  };

  return {
    handles: function (bodyid) {
      return bodyid === 'myhamstring';
    },
    init: _init
  };
}());

/*
 * Document is ready
 */
$().ready(function () {
  Hamstring.ready($('body').attr('id'));
});