document.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop > window.innerHeight) {
        $("header").css("background-color", "rgb(0,0,0,0.5)")
    } else {
        // $("#welcome-sec").css("background-position", "center " + -1500 * document.documentElement.scrollTop / window.innerHeight + "px");
        $("header").css("background-color", "transparent")
        let moveTop = document.documentElement.scrollTop;
        $("#welcome-sec h1, #welcome-sec pre").css("margin-top", -moveTop).css("opacity", (200 - moveTop) / 200).css("scale", (window.innerHeight - moveTop) / window.innerHeight);
    }
})
document.documentElement.scrollTop = 3080;
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