var player_symbol, bot_mode = true, game_started = false;
var bot_symbol;
$("#bot").on("change", function () {
    bot_mode = !$("#bot").prop("checked");
    if (bot_mode == false) {
        $("#symbol-label").animate({ opacity: 0 })
        $("#success > img").attr("src", "./assets/o.svg")
        $("#bot-label > .txt").text("2 Player");
    } else if (bot_mode == true) {
        $("#symbol-label").animate({ opacity: 1 })
        $("#success > img").attr("src", "./assets/success.svg")
        $("#bot-label > .txt").text("Bot");
    }
})

$("#game-start").on("click", startGame);

function startGame() {
    // get player symbol
    if ($("#symbol").prop("checked")) {
        player_symbol = "o";
        bot_symbol = "x"
    } else {
        player_symbol = "x";
        bot_symbol = "o"
    }

    // fade to playground
    $("#reg-sec").fadeOut(150);
    setTimeout(function () {
        $("#play-sec").fadeIn(150);
        player_symbol == "o" ? botAI() : "";
    }, 150);
}

var playground = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
var score = 0;
var currentSymbol = "x";


document.querySelectorAll(".play-cell").forEach(element => {
    element.addEventListener("click", setSymbol);
})

function setSymbol() {
    let setPos = $(this).attr("data-cell");
    let row = setPos.slice(0, 1), col = setPos.slice(2, 3);


    // check if it's empty place
    if (playground[row][col] == "-") {

        // place data in array
        playground[row][col] = player_symbol;


        // place correct symbol;
        $(this).css("background-image", `url(./assets/${player_symbol}.svg)`);


        if (checkWinner() == true) {
            return;
        }
        checkEmpty();

        if (bot_mode == true) {
            document.querySelectorAll("input.play-cell").forEach(element => {
                element.setAttribute("disabled", "true");
            })
            setTimeout(function () {
                botAI();
            }, 300);
        } else {
            player_symbol == "x" ? player_symbol = "o": player_symbol = "x";
        }
    }
}

function botAI() {
    var pos = Math.floor(Math.random() * 9);
    var x = Math.floor(pos / 3);
    var y = pos % 3;

    for (let i = 0; i < 3; i++) {
        for (let z = 0; z < 2; z++) {
            if (playground[i][z] == playground[i][z + 1] && playground[i][z] != "-") {
                if (z == 0 && playground[i][z + 2] == "-") {
                    x = i;
                    y = parseInt((z + 1) * 2);
                    pos = i * 3 + y;
                    console.log("works");
                } else if (z == 1 && playground[i][z - 1] == "-") {
                    console.log("alert " + i + " - " + parseInt(z - 1));
                    x = i;
                    y = parseInt((z - 1));
                    pos = i * 3 + y;
                }
            };
        }
    }


    var elem = document.querySelectorAll("input.play-cell")[pos];

    console.log(pos + " " + x + " " + y);

    if (playground[x][y] == "-") {

        // place data in array
        playground[x][y] = bot_symbol;


        // place correct symbol;
        elem.style.backgroundImage = `url(./assets/${bot_symbol}.svg)`;

        if (checkWinner() == true) {
            return
        };
        checkEmpty();
        document.querySelectorAll("input.play-cell").forEach(element => {
            element.removeAttribute("disabled");
        })
    } else {
        botAI();
    }
}



function checkEmpty() {
    let isFull = /-/.test(JSON.stringify(playground));
    if (isFull == false) {
        resetGround();
    }
}

function checkWinner() {
    for (let r = 0; r < 3; r++) {
        if (playground[r][0] == playground[r][1] && playground[r][1] == playground[r][2] && playground[r][1] != "-") {
            giveWin(playground[r][0]);
            return true;
        } else if (playground[0][r] == playground[1][r] && playground[1][r] == playground[2][r] && playground[1][r] != "-") {
            giveWin(playground[0][r]);
            return true;
        }
    }
    if (playground[0][0] == playground[1][1] && playground[0][0] == playground[2][2] && playground[0][0] != "-") {
        giveWin(playground[0][0]);
        return true;
    } else if (playground[0][2] == playground[1][1] && playground[0][2] == playground[2][0] && playground[0][2] != "-") {
        giveWin(playground[0][2]);
        return true;
    }
}

function giveWin(winner) {
    document.querySelectorAll("input.play-cell").forEach(element => {
        element.setAttribute("disabled", "enabled");
    })
    if (bot_mode == false) {
        if (player_symbol == "o") {
            $("#success .txt").text(parseInt($("#success .txt").text()) + 1);
        } else if (player_symbol == "x") {
            $("#fail .txt").text(parseInt($("#fail .txt").text()) + 1);
        }
        $("#winner_logo").attr("src", "./assets/" + winner + ".svg");
        $("#winner > .txt").text(" Won");
    } else if (bot_mode == true && player_symbol == winner) {
        $("#winner_logo").attr("src", "./assets/success.svg");
        $("#winner > .txt").text("You won");
        $("#success .txt").text(parseInt($("#success > .txt").text()) + 1);
    } else if (bot_mode == true && player_symbol != winner) {
        $("#winner_logo").attr("src", "./assets/fail.svg");
        $("#winner > .txt").text("You lose");
        $("#fail .txt").text(parseInt($("#fail > .txt").text()) + 1)
    }
    $("#pop-up").fadeIn(300);
}

$("#rematch").on("click", function () {
    startGame();
    resetGround();
    $("#pop-up").fadeOut(150);
})

$("#restart").on("click", function () {
    $("#play-sec").fadeOut(150);
    $("#pop-up").fadeOut(150);
    setTimeout(() => {
        $("#reg-sec").fadeIn(150).css("display", "grid");
        resetStats();
        resetGround();
    }, 150)
})

var resetGround = () => {
    for (let c = 0; c < 3; c++) {
        for (let r = 0; r < 3; r++) {
            playground[c][r] = "-";
        }
    }
    $("#playground input").each(function (i, obj) {
        $(obj).css("background-image", "");
    })
    document.querySelectorAll("input.play-cell").forEach(element => {
        element.removeAttribute("disabled");
    })
}

var resetStats = () => {
    $("#success .txt").text("0");
    $("#fail .txt").text("0");
}