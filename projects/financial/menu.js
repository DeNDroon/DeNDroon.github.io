$(document).ready(function() {
    $.get('./header.html', function(data) {
        $('body').prepend(data);
    });
    $.get('./footer-top.html', function(data) {
        $("footer").append(data);
    });
    $.get('./footer-bot.html', function(data) {
        $(".foot-top").after(data);
    });
});