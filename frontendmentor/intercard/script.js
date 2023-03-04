document.getElementById("submit").addEventListener('click', () => {
    document.getElementById("main-form").classList.add("submitted");
})

function cardHol() {
    document.getElementById("card-holder").innerText = document.getElementById("card-holder-in").value;
}

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

function saveData() {
    localStorage.setItem("cardHol", document.getElementById("card-holder").innerText);
    localStorage.setItem("cardNum", document.getElementById("card-number").innerText);
    localStorage.setItem("cardMM", document.getElementById("month").innerText);
    localStorage.setItem("cardYY", document.getElementById("year").innerText);
    localStorage.setItem("cardCVC", document.getElementById("card-cvc").innerText);
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