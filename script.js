var scrollTrack = [0,0];
var counter = 0;
document.addEventListener("scroll", function() {
    scrollTrack[1] = document.documentElement.scrollTop;
    if(document.documentElement.scrollTop < 1000) {
        $("#motivate").css("left", -counter);
        $("#about").css("right", -counter);
        $(".footer").css("opacity", 100 - counter / 5 + "%")
    }
    counter = scrollTrack[1];
    scrollTrack[0] = scrollTrack[1];
})

ScrollReveal().reveal("section > div")