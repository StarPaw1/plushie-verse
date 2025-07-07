let title;
let stardut;
let currentScreen = "title";

// Button dimensions
let rectX, rectY;
let rectW = 100;
let rectH = 100;

function preload() {
  title = loadImage("title-screen.png");
  stardut = loadImage("star-dust-button.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = width / 2 - 200;
  rectY = 250;
   rectMode(CORNER);
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
  }
}

function drawTitleScreen() {
  image(title, 0, 0, windowWidth, windowHeight);
}

function drawMixScreen() {
  // Example potion element
  ellipse(width / 2, height / 2, 100);
 rect(rectX, rectY, rectW, rectH);
  image(stardust, rectX, rectY, rectW, rectH);

  // Debug outline
  noFill();
  stroke("red");
 
}

function mousePressed() {
  if (currentScreen === "title") {
    currentScreen = "mix";
  } else if (
    currentScreen === "mix" &&
    mouseX > rectX &&
    mouseX < rectX + rectW &&
    mouseY > rectY &&
    mouseY < rectY + rectH
  ) {
    console.log("Stardust button clicked!");
    // Trigger potion logic here
    ellipse(50, 50, 50, 50);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rectX = width / 2 - 200;
}




