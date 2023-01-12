var gridState = 1;
var bmState = 1;
function changeGrid() {
    const elem = document.getElementById('sub-button');
    switch(gridState) {
        case 1:
            elem.style.left= "0px";
            gridState = 2;
            break;
        case 2:
            elem.style.left= "50%";
            gridState = 1;
            break;
    }
}

