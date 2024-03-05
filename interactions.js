

/**
 * function triggered every time user scrolls
 * @param {WheelEvent} event event containing the wheel scrolling parametres
 */
function mouseWheel(event) {
    const deltaWheel = event.delta * 0.5;
    
    //delta means increment 
    //- if the user is scrolling quickly it will be higher

    current_size = current_size + deltaWheel * 0.06;

    changeColor();
    
}
 

