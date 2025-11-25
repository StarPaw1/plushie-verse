let star;
let angle = 0;
let starShow = false;

function preload() {
  star = loadImage('star.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  const button1 = document.getElementById("depressed");
  button1.addEventListener("click", function() {
    starShow = !starShow; // toggle on/off
    button1.style.color = "rgb(40, 244, 99)";
    button1.style.backgroundColor = starShow ? "rgb(140, 182, 255)" : "";
  });
}

function draw() {
  background(250);

  // Static ellipse
  fill(23, 89, 230);
  ellipse(windowWidth / 4, windowHeight / 4, windowWidth / 16, windowWidth / 16);

  // Rotating star
  if (starShow) {
    push();
    // Move origin to star position
    translate(windowWidth / 15 + windowWidth / 32, windowHeight / 4 + windowWidth / 32); 
    rotate(angle);
    imageMode(CENTER);
    // Draw star at (0,0) relative to translated origin
    image(star, 0, 0, windowWidth / 16, windowWidth / 16);
    pop();

    angle += 0.01;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

