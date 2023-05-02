let scrolling = false;

document.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop >= 100) {
        $("header > h1").css("opacity", "0");
    } else {
        $("header > h1").css("opacity", "1");
    }
})

$("#menu a").attr("disabled", "true")
$("#menu a").on("hover",function() {
    setTimeout(function() {
        $(this).attr("disabled", "false");
    }, 200);
})  