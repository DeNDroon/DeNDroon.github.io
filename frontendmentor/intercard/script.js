const form = document.getElementById("main-form");
const cont = document.getElementById("container");
const thx = document.createElement(`div`); thx.id = "thankSec";
const img = new Image(); img.src = './images/icon-complete.svg'; img.alt = "success"
const hText = document.createElement("h1"); hText.innerText = "Thank you!";
const pText = document.createElement("p"); pText.innerText = "We've added your card details";
const btn = document.createElement("input"); btn.value = "Continue"; btn.type = "submit"; btn.classList.add("but");
thx.append(img, hText, pText, btn)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("main-form").style.display = "none";
    cont.appendChild(thx);
    btn.addEventListener("click", () => {
        location.reload();
    })
})

function cardNum() {
    var inputTxt = document.getElementById("card-number-in").value;
    var dflt = "0000000000000000";
    var sliceTxt = dflt.slice(inputTxt.length, dflt.length);
    var sliceSum = inputTxt + sliceTxt;
    let addSpaces = sliceSum.slice(0, 4) + ' ' + sliceSum.slice(4, 8) + ' ' + sliceSum.slice(8, 12) + ' ' + sliceSum.slice(12,16);
    document.getElementById("card-number").innerText = addSpaces;
}

function changeMM() {
    document.getElementById("month").innerText = document.getElementById("month-in").value;
}

function changeYY() {
    document.getElementById("year").innerText = document.getElementById("year-in").value;
}

function changeCVC() {
    document.getElementById("card-cvc").innerText = document.getElementById("cvc-in").value;
}

function cardHol() {
    document.getElementById("card-holder").innerText = document.getElementById("card-holder-in").value;
}

function limitMax(item, x) {
    var inputTxt = item.value;
    item.value = inputTxt.substring(0, x);
}

function backLight(itemId) {
    document.getElementById(itemId.id).parentElement.classList.add("in-back");
}

function disLight(itemId) {
    document.getElementById(itemId.id).parentElement.classList.remove("in-back");
}