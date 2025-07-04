let title;
function preload(){
title= loadImage("Title-screen.png");

}
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
image(title,0,0,windowwidth,windowHeight);
  

}
function drawMixScreen(){
  ellipse(100,100,width/2,height/2);


}
