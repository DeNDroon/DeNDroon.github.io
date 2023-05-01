var counter = localStorage.length;
webSettings.setDomStorageEnabled(true);
function recover() {
  if(localStorage.length >= 1) {
    for(let i = 0; i < localStorage.length; i++) {
      let noteObj = JSON.parse(localStorage.getItem(i)); // parse JSON string into object
      addnewNote(noteObj.text, noteObj.checked, noteObj.date); // pass text and checkbox state to addnewNote function
    }
    $("#pl-holder").css("display", "none");
  }
}

$("#note-in").keypress(function (e) {
  if (e.key == "Enter") {
    checkNote();
  }
})

function checkNote() {
  var elems = $(".old-note");
  var new_note = $("#note-in").val();
  // If it's empty
  if ($("#note-in").val() == "") {
    alert("Please enter note");
    return;
  }
  // Check for dublicate
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].innerText == new_note) {
      alert("Same note was found");
      return;
    }
  }
  var noteDate = new Date().getHours() + ':' + new Date().getMinutes() + ' ' +new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
  let newNote = {text: new_note, checked: false, date: noteDate}; // create a JSON object
  localStorage.setItem(counter, JSON.stringify(newNote)); // save as a JSON string
  addnewNote(new_note, false, noteDate); // pass checked parameter as false by default
  counter++;
  if ($("#pl-holder").css("display") == "block") {
    $("#pl-holder").fadeOut();
  }
}

function addnewNote(txt, checked, noteDate) {
  let checkedAttr = checked ? "checked" : ""; // create checked attribute if checked parameter is true
  $("#history").append(`<div class='old-note'><input type='checkbox' ${checkedAttr}><span>${txt}</span><i class="fa-sharp fa-solid fa-trash-can" onclick="remParent(this)"></i><label class="date-time">${noteDate}</label>`)
  // remove input
  $("#note-in").val("");
}


// REMOVE PARENT ELEMENT
function remParent(elem) {
  for(let i = 0; i < localStorage.length; i++) { //Check local data
    let noteObj = JSON.parse(localStorage.getItem(i)); // parse JSON string into object
    if(elem.previousSibling.innerText == noteObj.text) { // delete duplicate data in local storage
      localStorage.removeItem(i);
      noteObj.checked = elem.previousSibling.previousSibling.checked; // update checkbox state in object
      localStorage.setItem(i, JSON.stringify(noteObj)); // save updated object as a JSON string
      movePrev(i); // move data
      elem.parentElement.remove(); // remove from page
    }
  }

  if (localStorage.length == 0) {
    $("#pl-holder").fadeIn(100);
  }
}

// MOVE LOCAL DATA TO FILL DELETED INDEX
function movePrev(from) {
  for(let i = from; i < localStorage.length; i++) {
    localStorage.setItem(i, localStorage.getItem(i+1));
  }
  localStorage.removeItem(localStorage.length - 1);
  counter--;
}

function updateCheckState(checkbox, text) {
  for (let i = 0; i < localStorage.length; i++) { // loop through all localStorage items
    let noteObj = JSON.parse(localStorage.getItem(i)); // parse JSON string into object
    if (noteObj.text == text) { // check if the note text matches
      noteObj.checked = checkbox.checked; // update the checked property in the note object
      localStorage.setItem(i, JSON.stringify(noteObj)); // save the updated note object as a JSON string in localStorage
      break; // break the loop
    }
  }
}

$(document).on("click", "input[type='checkbox']", function() {
  updateCheckState(this, $(this).siblings("span").text());
});