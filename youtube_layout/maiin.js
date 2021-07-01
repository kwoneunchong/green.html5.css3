$(function() {
    $(document).ready(function() {
        setHeigt();
    });

    $(window).resize (function() {
        setHeigt();
    });

    function setHeight() {
        var height = $(window).height();
        // #main_header 높이 빼줌//
        $("#main_aside").height(height - 56);
    }
});