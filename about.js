
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  fill(150, 100, 255);
  let brodyImg;

function preload() {
  brodyImg = loadImage("brody card.png"); // file name with space
}
ellipse(100,100,100,100);
  
image(brodyImg,100,100,288,400);
  
  
  console.log("if you read this the great");
  
}
