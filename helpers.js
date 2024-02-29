/** 
 * a function that translate radius and theta to html coordinates and returns x and y in an object
 */
function transformPolarToCartesian(radius, theta) {
    // calculate x and y using the cosine and sine formula
    const x = radius * cos(theta);
    const y = -radius * sin(theta);

    // store x and y inside htmlCoordinates object
    //from now on htmlCoordinates.x is the same as x
    //from now on htmlCoordinates.y is the same as y
    const cartesianCoordinates = {
        x: x,
        y: y
    }
    //return the stored data so that it can be used outside of the function
    return cartesianCoordinates;

}
function changeColor() {
    const r = random(255);
    const g = random(255);
    const b = random(255);

    fill(r, g, b);
}