$("input[name='space_launch']").on("change", function () {
    let i = $(this).attr("id").slice(5, 6)
    console.log(i);
    switch (i) {
        case "1":
            changeOver(1)
            break;
        case "2":
            changeOver(2)
            break;
        case "3":
            changeOver(3)
            break;
        case "4":
            changeOver(4)
            break;

        default:
            console.log("Something went wrong");
    }
})

var smallSize = "./assets/technology/image-launch-vehicle-portrait.jpg"
var bigSize = "./assets/technology/image-launch-vehicle-landscape.jpg"
function changeOver(infoId) {
    $.ajax({
        url: "./data.json",
        dataType: 'json',
        success: function (jsonData) {
            $("#technology_name, #technology_title").css("transform", "rotateX(90deg)")

            setTimeout(function () {
                var i = jsonData.technology[infoId - 1];
                $("#technology_name").text(i.name);
                $("#technology_title").text(i.description);
                smallSize = i.images.portrait;
                bigSize = i.images.landscape;
                placePhoto(bigSize, smallSize);
                loadImage($("#technology_image").attr("src"), function () {
                    setTimeout(function() {
                        $("#technology_name, #technology_title").css("transform", "none")
                    }, 200)
                });
            }, 200)
        }
    });
}

window.addEventListener('resize', function () {
    placePhoto(bigSize, smallSize)
}, true);

placePhoto(bigSize, smallSize);

function placePhoto(bigger, smaller) {
    let img = window.innerWidth > 990 ? smaller : bigger;
    $("#technology_image").attr("src", img);
}

function loadImage(url, callback) {
    var img = new Image();
    img.onload = callback;
    img.src = url;
}