//select element for user to change between shapes
const selectElement = document.getElementById("shape-displayed");
//store currently sidplay shape - intial is shape circle
let shapeDisplayed = "cannabis";
//store if shape has recently changed
let shapeChanged = false;

selectElement.onchange = (event) => {
    shapeDisplayed = event.target.value;
    console.log(shapeDisplayed);
    shapeChanged = true;

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS); // Use radians for angles
   }
   
   function draw() {
    background(0);
    translate(width / 2, height / 2); // Center the origin
    
    noFill();
    changeColor();
 

    //scale(100);

   
    // Define the cannabis curve equation
    //let curveEquation = (theta) => {
       // const a = 1;
      // return a * (1 + 9/10 * cos(8 * theta)) * (1 + 0.1 * cos(24 * theta)) * (0.9 + 0.1 * cos(200 * theta)) * (1 + sin(theta));};
       
   
    //beginShape();
    //for (let a = 0; a < TWO_PI; a += 0.001) {
      // let r = 80 * curveEquation(a);
      // let x = r * cos(a);
      // let y = -r * sin(a);
      // vertex(x, y);
    //}
    //endShape();
   }
   function r1(theta, x, y, z) {
    return (
      (1 / x) *
      (1 + (9 / 10) * cos(8 * theta)) *
      (1 + (1 / 10) * cos(24 * theta)) *
      ((9 / 10) + (y / 10) * cos(z * theta)) *
      (1 + sin(theta))
    );
  }
  
  function setup() {
    createCanvas(600, 600);
    background(255);
    translate(width / 2, height / 2);
  
    // Plotting polar functions
    beginShape();
    noFill();
    stroke(0);
    for (let theta = 0; theta <= TWO_PI; theta += 0.01) {
      let r =
        r1(theta, 1, 0.8, 200) +
        PI / 10 +
        r1(theta, 1.05, 0.8, 202) +
        PI / 10 +
        r1(theta, 1.55, 0.5, 600) +
        PI / 20 +
        r1(theta, 1.4, 0.6, 600) +
        PI / 30 +
        r1(theta, 2, 4, 300) +
        r1(theta, 3, 3, 300) +
        r1(theta, 4, 2, 300) +
        r1(theta, 5, 1, 200);
  
      let x = r * cos(theta);
      let y = r * sin(theta);
      vertex(x, y);
    }
    endShape(CLOSE);
  
    // Plotting lines
    strokeWeight(1);
    stroke(0, 0, 255);
    line(-300, -20, 300, -20);
    line(-300, -30, 300, -30);
    line(-300, -50, 300, -50);
    line(-300, -80, 300, -80);
    line(-300, -300, 300, -300);
  }
  
  function draw() {}
  
  // Custom cosine function to handle radians
  function cos(theta) {
    return Math.cos(theta);
  }
  
  // Custom sine function to handle radians
  function sin(theta) {
    return Math.sin(theta);
  }