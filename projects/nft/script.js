if (isMobileDevice()) {
} else {
$("body").mousemove(function (e) {

        posY = e.clientY / this.clientHeight * 45 - 22.5;
        posX = e.clientX / this.clientWidth * 45 - 22.5;
        $("#card").css("--x", -posY + "deg");
        $("#card").css("--y", posX + "deg");
        reflectPosY = e.clientY / this.clientHeight * 80;
        reflectPosX = e.clientX / this.clientWidth * 70 - 35 + reflectPosY - 40;
        // $("#reflect").css("top", reflectPosY + "%");
        // $("#reflect").css("left", reflectPosX + "%");
        $("#reflect").css("--grad", reflectPosX + "deg");
})
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}