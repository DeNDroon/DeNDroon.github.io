document.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop > window.innerHeight) {
        $("header").css("background-color", "black")
    } else {
        $("header").css("background-color", "transparent")
    }
})