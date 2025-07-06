// this preloads the title screen
let title;
let stardust;
function preload(){
title=loadImage("title-screen.png");
stardust=loadImage("star-dust-button.png");
  
}//preload ends

// retry deploy
// this sets the screen to title
let currentScreen = "title";

// this lets title screen switch with the mix screen when the mouse is pressed
function mousePressed() {
  if (currentScreen === "title") {
    // Either switch screens...
    currentScreen = "mix";

  
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background("#fdf6ff");

  if (currentScreen === "title") {
    drawTitleScreen();
  } else if (currentScreen === "mix") {
    drawMixScreen();
  } else if (currentScreen === "result") {
    drawResultScreen();
     console.log("draw loop is running");
  background("#fdf6ff");
  // rest of your code...
  }
}
function drawTitleScreen(){
image(title,0,0,windowWidth,windowHeight);
  

}
function drawMixScreen(){
  ellipse(width/2,height/2,100);
 image(stardust,width/2-120,200,100,100);
 // Debug box for your button
  noFill();
  stroke("red");
  rect(width/2-120, 200, 100, 100); // match your button position & size


}

