let star;
let angle = 0;
let starShow = false;
let viewShow = false;

function preload() {
  star = loadImage('star.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  const clicker = document.getElementById("view");
  //makes button hide
  clicker.hidden =true
  // makes star visable
  const button1 = document.getElementById("depressed");
  button1.addEventListener("click", function() {
    starShow = true; 
    button1.style.color = "rgb(40, 244, 99)";
    button1.style.backgroundColor = starShow ? "rgb(140, 182, 255)" : "";
    viewShow = true;
  });
}

function draw() {
  background(250);

 
  fill(23, 89, 230);
  ellipse(windowWidth / 4, windowHeight / 4, windowWidth / 16, windowWidth / 16);

// stars8
  if (starShow) {
    push();
    // pos
    translate(windowWidth / 15 + windowWidth / 32, windowHeight / 4 + windowWidth / 32); 
    rotate(angle);
    imageMode(CENTER);
    // 0 is right
    image(star, 0, 0, windowWidth / 16, windowWidth / 16);
    pop();
        push();
    // this is for pos
    translate(windowWidth / 10 + windowWidth / 4, windowHeight / 5 + windowWidth / 32); 
    rotate(angle);
    imageMode(CENTER);
    // 0 keeps it at the same spot
    image(star, 0, 0, windowWidth / 16, windowWidth / 16);
    pop();


    angle += 0.05;
    if (viewShow){
      clicker.hidden=false;
      
    }

    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

