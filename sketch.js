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

//select element for user to change between shapes
const selectElement = document.getElementById("shape-displayed");
//store currently sidplay shape - intial is shape circle
let shapeDisplayed = "cannabis";
//store if shape has recently changed
let shapeChanged = false;
let current_size = 1;
let max_size = 20;
let min_size = 1;

// Sets starting size and changes size of shape when scrolling
function setSize(delta) {

  let newSize = current_size + delta * 0.5;
  if (newSize <= max_size && newSize >= min_size){
      current_size = newSize;
  }

}

selectElement.onchange = (event) => {
    shapeDisplayed = event.target.value;
    console.log(shapeDisplayed);
    shapeChanged = true;


}

//Sets and ranomize colour of shape
function changeColor() {
    const r = random(255);
    const g = random(255);
    const b = random(255);

    fill(r, g, b, 100);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS); // Use radians for angles
    changeColor();
    


}
 
   
   function draw() {
    background(0, 2);
    noStroke();
    translate(width / 2, height / 1.4); // Center the origin

   
    // Define the cannabis curve equation
    function curveEquation(theta) {
           const a = current_size;
           return a * (1 + 9 / 10 * cos(8 * theta)) * (1 + 0.1 * cos(24 * theta)) * (0.9 + 0.1 * cos(200 * theta)) * (1 + sin(theta));
       }


    
   
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
   