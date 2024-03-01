const colorButton = document.getElementById("color-changing-buttons");

colorButton.onclick = () => {
changeColor();
}

/**
 * function triggered every time user scrolls
 * @param {WheelEvent} event event containing the wheel scrolling parametres
 */
////function mouseWheel(event) {
    changeColor();
    var angle = map(mouseX,0,width, -90, 90);
    var r = 100;
    //delta means increment 
    //- if the user is scrolling quickly it will be higher
    const deltaWheel = event.delta * 0.5;

    offset = offset + deltaWheel;

//}
function mouseWheel(event) {
    const deltaWheel = event.delta * 0.5;
    setSize(-event.deltaY / 100)
}


