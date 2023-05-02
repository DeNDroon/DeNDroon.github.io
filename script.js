let scrolling = false;

document.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop >= 100) {
        $("header > h1").css("opacity", "0");
    } else {
        $("header > h1").css("opacity", "1");
    }
})