let currentScreen = "title";
let ingredients = [];

function addIngredient(ingredient) {
  if (ingredients.length < 2) {
    ingredients.push(ingredient);
    console.log("Added:", ingredient);
  }

  if (ingredients.length === 2) {
    checkPotion();
  }
}

function checkPotion() {
  const combo = ingredients.sort().join("+");

  // Check specific combos
  switch (combo) {
    case "stardust+starshine":
      displayResult("Glowing Luck Powder 🌟");
      break;
    case "slime+star":
      displayResult("WiggleSpeed Elixir 💨");
      break;
    default:
      displayResult("Unknown Potion 🤔");
  }

  // Clear for next mix
  ingredients = [];
}

function displayResult(text) {
  document.getElementById("result").innerText = text;
}

let title;
let stardust;
let starshine;
let buttonPos = 140;
let showSparkle = false;
let shine = false;
// Button dimensions
let rectX, rectY;
let rectW = 100;
let rectH = 100;

function preload() {
  title = loadImage("title-screen.png");
  stardust = loadImage("star-dust-button.png");
  starshine = loadImage("star-shine-button.png");
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
  } 
  if (currentScreen === "result") { 
    drawResultScreen();
    console.log("draw loop is running");
  }
}

function drawTitleScreen() {
  image(title, 0, 0, windowWidth, windowHeight);
}
function mousePressed() {
  if (currentScreen === "title") {
    currentScreen = "mix";
  } 
if (
  currentScreen === "mix" &&
  mouseX > rectX &&
  mouseX < rectX + rectW &&
  mouseY > rectY &&
  mouseY < rectY + rectH
) {
  console.log("Stardust button clicked!");
  showSparkle = true;
  addIngredient("stardust");
}
  if  (
  currentScreen === "mix"&&
    mouseX > rectX+buttonPos &&
    mouseX < rectX+buttonPos+rectW &&
    mouseY > rectY &&
    mouseY < rectY + rectH    

)  {
  
    console.log("StarShine button was clicked");
shine = true;
addIngredient("starshine");

  }
    



  
}

function drawMixScreen() {
  // Example potion element
  
  
  // Debug outline
  noFill();
  stroke("red");
  ellipse(width / 2, height / 2, 100);
 rect(rectX, rectY, rectW, rectH);
  image(stardust, rectX, rectY, rectW, rectH);
  image(starshine, rectX+buttonPos,rectY,rectW,rectH);
 if (showSparkle) {
  fill("gold");
  noStroke();
  ellipse(50, 50, 50, 50);
}

if (shine) {
  fill("#4ED5E9");
  noStroke();
  ellipse(100, 100, 50, 50);
}


    }
  
 drawResultScreen(){



 }




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rectX = width / 2 - 200;
}
