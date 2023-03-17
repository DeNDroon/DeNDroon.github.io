var timer = 0;
var i = setInterval(function() {
    timer+=1;
    $("#load-scrn").css("stroke-dashoffset", timer + 'px');
}, 10)

$("#body").ready(function () {
    clearInterval(i);
    $("#load-screen").fadeOut(800);
});

document.body.addEventListener('mousemove', function(e) {
    var scrnX = document.body.clientWidth;
    var scrnY = document.body.clientHeight;
    var posX = e.pageX;
    var posY = e.pageY;
    var grad_deg = (posX + scrnX) / (posY + scrnY) * 180;
    document.body.style.setProperty("--grad-deg", grad_deg  + "deg");
})

document.addEventListener("scroll", function() {
    var curPos = document.documentElement.scrollTop;
    if(curPos>= 400) {
        $("#nav-bot").css("top", curPos + "px");
    } else {
        $("#nav-bot").css("top", 400 + "px");
    }
})