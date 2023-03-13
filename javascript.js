const openMenu = () => {
    if($("nav").hasClass("show-menu")) {
        $("nav").removeClass("show-menu")
    } else {
        $("nav").addClass("show-menu");
    }
}