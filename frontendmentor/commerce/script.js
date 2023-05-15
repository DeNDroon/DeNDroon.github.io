let itemList = {
    132541: {
        name: "Fall Limited Edition Sneakers",
        newPrice: 125,
        oldPrice: 250
    }
}

let itemId = {
    "Fall Limited Edition Sneakers": 132541
}

const refreshCart = () => {
    $("#picked-items").html("");
    let parsed = new Set(cart.items);
    if (cart.items.length > 0) {
        parsed.forEach(elem => {
            let itemName = itemList[elem].name;
            let itemPrice = parseFloat(itemList[elem].newPrice).toFixed(2);
            let itemAmount = cart.items.filter(x => x == elem).length;
            let sumPrice = parseFloat(itemPrice * itemAmount).toFixed(2);
            $("#picked-items").append(`<div class="d-flex align-items-center">
        <img src="./images/image-product-1-thumbnail.jpg" alt="thumb" height="50px">
        <div>
          <p>${itemName}</p>
          <p>$${itemPrice} * ${itemAmount} <span>$${sumPrice}</span></p>
        </div>
        <button class="btn" data-func="cart-rem"><img src="./images/icon-delete.svg" alt="remove"></button>
      </div>`)
        });
        $("#item-cart-counter").text(cart.items.length).css("display", "inline-block");
        $("#picked-items > div > button").on("click", function() {
            cart.remove($(this).siblings("div").children("p:first-of-type()").text());
        })
        $("#checkout-btn").prop("disabled", false);
    } else {
        $("#checkout-btn").prop("disabled", true);
        $("#item-cart-counter").text(cart.items.length).css("display", "none");
        $("#picked-items").append("<p>").text("Cart is empty").addClass("text-center")
    }
}

let images = {
    cur: 1,
    thumbs: {
        1: "./images/image-product-1-thumbnail.jpg",
        2: "./images/image-product-2-thumbnail.jpg",
        3: "./images/image-product-3-thumbnail.jpg",
        4: "./images/image-product-4-thumbnail.jpg"
    },
    full: {
        1: "./images/image-product-1.jpg",
        2: "./images/image-product-2.jpg",
        3: "./images/image-product-3.jpg",
        4: "./images/image-product-4.jpg"
    },
    placeFull: function (index, dir) {
        if (dir.attr("src") != images.full[index]) {
            dir.addClass("bluring");
            setTimeout(() => {
                dir.attr("src", images.full[index]);
                setTimeout(() => {
                    dir.removeClass("bluring");
                }, 100)
            }, 100);
            images.cur = index;
        }
    }
}

$('#main-cont input[name="photo-carousel"]').on("click", function () {
    images.placeFull($(this).index(), $(".main-photo"));
})
$('#full-screen input[name="photo-carousel"]').on("click", function () {
    images.placeFull($(this).index() - 1, $("#full-screen .main-photo"));
})

$("#main-cont .main-photo").on("click", function() {
    $("#full-screen").css("display", "grid")

})

$("#close-full").on("click", function() {
    $("#full-screen").css("display", "none");
})

var cur_Product = "Fall Limited Edition Sneakers";

const cart = {
    add: () => {
        cart.items.push(itemId[cur_Product]);
        $("#item-amount").text(cart.items.filter(x => x == itemId[cur_Product]).length);
        refreshCart();
    },
    remove: (item) => {
        if (cart.items.filter(x => x == itemId[item]).length > 0) {
            cart.items.splice(cart.items.indexOf(itemId[item]), 1)
            $("#item-amount").text(cart.items.filter(x => x == itemId[item]).length);
            refreshCart();
        }
    },
    items: []
}

$("#item-plus").on("click", () => {
    cart.add(cur_Product);
})
$("#add-btn").on("click", () => {
    cart.add(cur_Product);
})
$("#item-minus").on("click", () => {
    cart.remove(cur_Product);
})