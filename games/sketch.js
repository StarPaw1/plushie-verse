
function setup() {
  createCanvas(windowWidth, windowHeight);
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


};
