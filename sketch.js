//select element for user to change between shapes
const selectElement = document.getElementById("shape-displayed");
//store currently sidplay shape - intial is shape circle
let shapeDisplayed = "cannabis";
//store if shape has recently changed
let shapeChanged = false;
let current_size = 1;
let max_size = 10;
let min_size = 1;

function setSize(delta) {
  let newSize = current_size + delta;
  if (newSize <= max_size && newSize >= min_size){
      current_size = newSize;
  }
}

selectElement.onchange = (event) => {
    shapeDisplayed = event.target.value;
    console.log(shapeDisplayed);
    shapeChanged = true;


}


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS); // Use radians for angles
    changeColor();



   }
 
   
   function draw() {
    background(0);
    translate(width / 2, height / 2); // Center the origin

   
    // Define the cannabis curve equation
    let curveEquation = (theta) => {
        const a = current_size;
       return a * (1 + 9/10 * cos(8 * theta)) * (1 + 0.1 * cos(24 * theta)) * (0.9 + 0.1 * cos(200 * theta)) * (1 + sin(theta));};
       
   
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
       let r = 80 * curveEquation(a);
       let x = r * cos(a);
       let y = -r * sin(a);
       vertex(x, y);
    }
    endShape();
   }
   