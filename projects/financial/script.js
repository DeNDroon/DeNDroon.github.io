

$("input[type='radio']").on("change", () => {
    let id = $("input[type='radio']:checked").attr("id") - 1;
    let each = window.innerWidth / (window.innerWidth / $(".comment").innerWidth());
    let scrollLeft = id * each;
    $(".com-carousel").scrollLeft(scrollLeft);
    $(".comment").css("opacity", "0.2");
    $(`.comment:nth-of-type(${id + 1})`).css("opacity", "1");
})

$(".com-carousel").on("scroll", () => {
    let cur = $(".com-carousel").scrollLeft() + 50;
    let each = window.innerWidth / (window.innerWidth / $(".comment").innerWidth());
    let id = Math.floor(cur / each) + 1;
    $(".comment").css("opacity", "0.2");
    $(`.comment:nth-of-type(${id})`).css("opacity", "1");
    $("#" + id).prop("checked", "true");
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