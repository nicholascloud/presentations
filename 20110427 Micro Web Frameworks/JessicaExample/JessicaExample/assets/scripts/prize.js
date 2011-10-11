(function ($) {
    $().ready(function () {
        $("input[type=checkbox]").change(function () {
            var checkbox = $(this);
            $.post("/expire", { id: checkbox.val() }, function () {
                checkbox.parent().hide();
            });
        });
    });

})(jQuery);

(function ($) {
    $().ready(function() {
        $("#pickButton").click(function() {
            var names = $("#names");
            var sheen = $("#sheen");
            var winner = $("#winner");
            var joinedNames = names.val().replace(new RegExp( "\\n", "g" ), ",");
            $.post("/pick", { contenders: joinedNames }, function(data) {
                names.val(data.remaining);
                winner.html(data.winner);
                sheen.show();
            });
        });
    });
})(jQuery);