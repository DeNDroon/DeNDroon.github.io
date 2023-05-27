$(document).ready(function() {
    // Fetch the header content using AJAX
    $.get('./header.html', function(data) {
        // Prepend the header content to the body
        $('body').prepend(data);
    });
    $.get('./footer-top.html', function(data) {
        // Prepend the header content to the body
      $("footer").prepend(data);
    });
    $.get('./footer-bot.html', function(data) {
      // Prepend the header content to the body
      $("footer").prepend(data);
    });
});