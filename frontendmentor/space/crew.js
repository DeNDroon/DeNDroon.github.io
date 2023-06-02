$("input[name='crew_meet']").on("change", function () {
    let i = $(this).attr("id").slice(4, 5)
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

function changeOver(crewId) {
    $.ajax({
        url: "./data.json",
        dataType: 'json',
        success: function(jsonData) {
            var i = jsonData.crew[crewId - 1];
            $("#name-last, #crew-bio, #position").css("transform", "rotateX(90deg)")
            $("#crew-img").css("transform", "translateX(50vw) scale(0.4)");
            setTimeout(() => {
                var newSrc = i.images.png;
                var image = document.getElementById("crew-img");
                image.src = newSrc;
                loadImage(newSrc, function() {
                    $("#name-last").text(i.name);
                    $("#crew-bio").text(i.bio);
                    $("#position").text(i.role);
                    $("#crew-img, #name-last, #crew-bio, #position").css("transform", "none")
                });
            }, 300)
        }
      });
}

function loadImage(url, callback) {
    var img = new Image();
    img.onload = callback;
    img.src = url;
}
function changeImageSrcAndLoad() {
    var newSrc = "new_image.jpg";
    var image = document.getElementById("myImage");
    image.src = newSrc;

    
  }