AOS.init();

$(document).on("scroll touchmove", function() {
    if ($(document).scrollTop() > $(window).innerHeight()) {
      $("header").css("background-color", "rgba(0,0,0,0.5)");
    } else {
      $("header").css("background-color", "transparent");
      let moveTop = $(document).scrollTop();
      $("#welcome-sec h1").css({
        "top": $("welcome-sec h1").css("top") - moveTop,
        "opacity": (200 - moveTop) / 200,
        "transform": "scale(" + (1 - (moveTop) / $(window).innerHeight()) + ") translateY(" + -moveTop / 1.25 + "px)"
      });
      $("#welcome-sec pre").css({
        "opacity": (200 - moveTop) / 200,
        "transform": "scale(" + (1 - (moveTop) / $(window).innerHeight()) + ") translateY(" + -moveTop / 1.25 + "px)"
      });
    }
  });
document.body.addEventListener("mousemove", function(e) {
    elem = document.querySelectorAll(".skill");
    document.querySelectorAll(".skill").forEach(elem => {
        let posX = (e.pageX - elem.offsetLeft - elem.clientWidth / 2);
        let posY = (e.pageY - elem.offsetTop - elem.clientHeight / 2);
        if(posX < 100 && posX > -100) {
            elem.style.setProperty("--x", posX + "px");
        }
        if(posY < 100 && posY > -100) {
            elem.style.setProperty("--y", posY + "px");
        }
    })
})