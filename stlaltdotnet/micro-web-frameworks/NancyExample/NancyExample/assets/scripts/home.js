(function ($) {
    $(function () {
        setTimeout(function () {
            var howto = $("#howto");
            var loader = $("#loader");
            $.get("/howto",
            function (data, textStatus, jqXHR) {
                howto.html(data);
                loader.css("display", "none");
                howto.css("display", "block");
            });
        }, 2000);
    });
})(jQuery);