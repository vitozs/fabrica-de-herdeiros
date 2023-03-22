$(document).ready(function () {
    $('iframe').on('load', function() {
        $("iframe").contents().find("#document html body #player .vp-target").css("border", "9px solid yellow");
    }); 
});