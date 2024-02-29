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
    let curveEquation = (theta) => {
        const a = 1;
       return a * (1 + 9/10 * cos(8 * theta)) * (1 + 0.1 * cos(24 * theta)) * (0.9 + 0.1 * cos(200 * theta)) * (1 + sin(theta));
    };
   
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.001) {
       let r = 100 * curveEquation(a);
       let x = r * cos(a);
       let y = -r * sin(a);
       vertex(x, y);
    }
    endShape();
   }
   
