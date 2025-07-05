// this preloads the title screen
let title;
function preload(){
title=loadImage("title-screen.png");

}
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
  }
}
function drawTitleScreen(){
image(title,0,0,windowWidth,windowHeight);
  

}
function drawMixScreen(){
  ellipse(width/2,,height/2,100);


}
