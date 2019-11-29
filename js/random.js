document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log("u pressed up")
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log("u pressed down")
        //if(this.position)
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    } else {
        console.log("u pressed something else")
    }

}