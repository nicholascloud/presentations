/*global postal:true, $:true*/

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

Hamstring.modules.push(function register () {
  

  var _init = function () {

  };

  return {
    handles: function (bodyid) {
      return bodyid === 'register';
    },
    init: _init
  }
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
    sec: '[name=sec]',
    names: function () {
      var selectors = [];
      for (var prop in this) {
        if (!this.hasOwnProperty(prop)) continue;
        if (typeof this[prop] !== 'string') continue;
        selectors.push(prop);
      }
      return selectors;
    },
    enable: function () {
      this.names().forEach(function (name) {
        $(name).attr('disabled', true);
      });
    },
    disable: function () {
      this.names().forEach(function (name) {
        $(name).removeAttr('disabled');
      });
    },
    getData: function ($section) {
      return {
        when: $section.find(this.when).val(),
        where: $section.find(this.where).val(),
        hour: $section.find(this.hour).val(),
        min: $section.find(this.min).val(),
        sec: $section.find(this.sec).val()
      };
    },
    reset: function ($section) {
      $section.find(this.when).val('');
      $section.find(this.where)[0].selectedIndex = 0;
      $section.find(this.hour).val('0');
      $section.find(this.min).val('0');
      $section.find(this.sec).val('0');
    }
  };

  var _init = function (bus) {
    var $section = $('#addrun');
    var $error = $section.find('#addrunerror');
    var $success = $section.find('#addrunsuccess');

    var submitForm = function (onSuccess, onError) {
      onSuccess = onSuccess || function () {};
      onError = onError || function () {};

      var formData = fields.getData($section);

      $.post('/run', formData, function (data, textStatus, jqXHR) {
        onSuccess(data.id);
      }).error(function (e) {
        onError();
      });
    };

    var resetForm = function () {
      fields.reset($section);
      $error.hide();
    };

    $section.find('a.submit').click(function (evt) {
      $error.hide();
      $success.hide();
      fields.disable();

      submitForm(function onSuccess (id) {
        bus.publish('run-added', id);
        resetForm();
        $success.fadeIn(500, function () {
          setTimeout(function () {
            $success.fadeOut(500);
          }, 1000);
        });
        fields.enable();

      }, function onError (message) {
        $error.find('span').html(message);
        $error.fadeIn(500);
        fields.enable();
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

Hamstring.modules.push(function () {

  var runTemplate = (function () {
    return {
      bind: function (run) {
        var $e = $('<div class="run" style="display:none;"></div>');
        $e.append(
          $('<h2></h2>').html(run.routeName));

        var $dl = $('<dl></dl>');
        $e.append($dl);

        $dl.append(
          $('<dt>Your time:</dt>'));

        $dl.append(
          $('<dd></dd>').html(run.duration));

        $dl.append(
          $('<dt>Best time:</dt>'));

        $dl.append(
          $('<dd></dd>').html(run.bestTime));

        $e.append(
          $('<p></p>').html(run.scheduledAt));

        $e.append(
          $('<p></p>').html(run.distance + ' miles'));

        $e.append(
          $('<p></p>').html(run.pace + ' min/mile'));

        return $e;
      }
    };
  }());

  var _getRun = function (id, handlers) {
    $.get('/run/' + id, function (data, textStatus, jqXHR) {
      handlers.success(data);
    }).error(function (e) {
      handlers.error(e);
    });
  };

  var _init = function (bus) {
    var $myruns = $('#myruns');
    var $error = $('#updaterunserror');

    bus.subscribe('run-added', function (id) {
      _getRun(id, {
        success: function (run) {
          var $run = runTemplate.bind(run);
          $myruns.prepend($run);
          $run.fadeIn(1000);
        },
        error: function () {
          $error.fadeIn(500, function () {
            setTimeout(function () {
              $error.fadeOut(500);
            }, 1000);
          });
        }
      });
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