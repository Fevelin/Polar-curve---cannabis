
let current_size = 1;
let max_size = 20;
let min_size = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS); // Use radians for angles
    changeColor();
    


}
 
   
   function draw() {
    background(0, 2);
    noStroke();
    translate(width / 2, height / 1.4); // Center the origin

    drawCannabis();
   }
   