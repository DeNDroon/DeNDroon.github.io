$("#dest-menu > li > a").on("click", function() {
    $("#dest-menu > li").removeClass("active");
    $(this).parent().addClass("active");
    switch ($(this).attr("id")) {
        case "moon_btn":
            changeOver("Moon")
            break;
        case "mars_btn":
            changeOver("Mars")
            break;
        case "europa_btn":
            changeOver("Europa")
            break;
        case "titan_btn":
            changeOver("Titan")
            break;
        default:
            console.log("Something went wrong");
    }
})


function changeOver(planet) {
    $.ajax({
      url: "./data.json",
      dataType: 'json',
      success: function(jsonData) {
          var i = jsonData.destinations.filter(x => x.name === planet);

          $("#planet_image").css("filter", "blur(50px)");
          $("#planet_name").css("filter", "blur(50px)");
          $("#description").css("filter", "blur(20px)");
          $("#distance").css("filter", "blur(20px)");
          $("#travel_time").css("filter", "blur(20px)");
            setTimeout(function() {
                let newSrc = i[0].images.png;
                $("#planet_image").attr("src", newSrc);
                $("#planet_name").text(i[0].name);
                $("#description").text(i[0].description);
                $("#distance").text(i[0].distance);
                $("#travel_time").text(i[0].travel);
                loadImage(newSrc, function() {
                    setTimeout(function() {
                        $("#planet_image").css("filter", "none");
                        $("#planet_name").css("filter", "none");
                        $("#description").css("filter", "none");
                        $("#distance").css("filter", "none");
                        $("#travel_time").css("filter", "none");
                    },100)
                })
            }, 100)
          
          
      }
    });
}

function loadImage(url, callback) {
    var img = new Image();
    img.onload = callback;
    img.src = url;
}