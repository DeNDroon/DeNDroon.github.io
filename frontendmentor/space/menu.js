$("#menu-btn").on("change", function() {
    if ($("#menu-btn").prop("checked")) {
        $("nav").css("transform", "none")
    } else {
          $("nav").css("transform", "translate(100%)")
        }
    })