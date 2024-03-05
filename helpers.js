function transformPolarToCartesian(current_size, theta) {
    // calculate x and y using the cosine and sine formula
    const x = current_size * cos(theta);
    const y = -current_size * sin(theta);

    // store x and y inside cartesianCoordinates object
    //from now on htmlCoordinates.x is the same as x
    //from now on htmlCoordinates.y is the same as y
    const cartesianCoordinates = {
        x: x,
        y: y
    }
    //return the stored data so that it can be used outside of the function
    return cartesianCoordinates;
}

// Define the cannabis curve equation
function curveEquation(theta) {
    const a = current_size;
    return a * (1 + 9 / 10 * cos(8 * theta)) * (1 + 0.1 * cos(24 * theta)) * (0.9 + 0.1 * cos(200 * theta)) * (1 + sin(theta));
}

function drawCannabis() {
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
       let r = 8 * curveEquation(a);
       let x = r * cos(a);
       let y = -r * sin(a);
       vertex(x, y);
       
    }

    endShape();
    current_size = current_size + 0.01;

}

function changeColor() {
    const r = random(255);
    const g = random(255);
    const b = random(255);

    fill(r, g, b, 50);
}



