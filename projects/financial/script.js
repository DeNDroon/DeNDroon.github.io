$("input[type='radio']").on("change", () => {
    let id = $("input[type='radio']:checked").attr("id") - 1;
    let each = window.innerWidth / (window.innerWidth / $(".comment").innerWidth());
    let margin = "calc(" + -id * each + "px + 5%)";
    $(".com-carousel").css("margin-left", margin);
    $(".comment").css("opacity", "0.2");
    $(`.comment:nth-of-type(${id + 1})`).css("opacity", "1");
})

let playing = false;
$(".video-cont > button").on("click", function() {
    if (!playing) {
        document.getElementById("video-player").play();
        $(".video-cont > button").fadeToggle();
        playing = !playing
    }
})

$("#video-player").on("click", () => {
    if (!playing) {
        document.getElementById("video-player").play();
    } else {
        document.getElementById("video-player").pause();
    }
    $(".video-cont > button").fadeToggle();
    playing = !playing
})

$("#menu-btn").on("click", () => {
    $(".nav-cont").toggleClass("open-menu");
})
$("#menu-btn").on("focus", () => {
    $(".nav-cont").toggleClass("open-menu");
})