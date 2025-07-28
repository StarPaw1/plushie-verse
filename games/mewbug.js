let currentScreen = "title";
let ingredients = [];
let results;
let potionResult = "";
let starroot;
let moonlitWater;
let mints;
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
    case "starroot+starshine":
      displayResult("Bright Starry Flower 🌸⭐");
      break;
   case "stardust+starroot":
  displayResult("Nova Powder 🤩");
  break;
    case "moonlitWater+stardust":
      displayResult("Moonlit Stars ⭐🌙");
break;
    case "moonlitWater+starroot":
      displayResult("Moon beans 🫘 🌙");
      break;
    case "moonlitWater+starshine":
      displayResult(" Energy Bomb ⚡");
      
break;
    default:
      displayResult("Unknown Potion 🤔");
     break;   
  }
  
 currentScreen = "result";
  // Clear for next mix
  ingredients = [];
  
}

function displayResult(text) {
 potionResult = text;

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
  results = loadImage("result-screen.png");
  starroot = loadImage("star-root-button.png");
  moonlitWater = loadImage("moonlit-water-button.png");
  mints = loadImage("mint");
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
    
if (
  currentScreen === "mix"&&
mouseX > rectX-buttonPos &&
mouseX < rectX-buttonPos+rectW &&
mouseY > rectY &&
mouseY < rectY + rectH  

  ){
console.log("Star root was added in the beaker");
addIngredient("starroot")
}
if (
  currentScreen==="mix" &&
mouseX > rectX+buttonPos*2&&
mouseX < rectX+buttonPos*2+rectW&&
  mouseY > rectY &&
  mouseY < rectY + rectH
  

 ){
console.log("Moonlit water was added!");
  addIngredient("moonlitWater");


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
  image(starroot, rectX-buttonPos, rectY, rectW,rectH);
  image(moonlitWater,rectX+buttonPos*2,rectY,rectW,rectH);
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
  
function drawResultScreen(){
image(results,0,0,windowWidth,windowHeight);
// Draw the result text on top of the image
  textAlign(CENTER, CENTER);
  textSize(32);
  fill("#5e2b82");
  text("Potion Result:", width / 2, height / 2 - 50);

  textSize(40);
  fill("#FCFFB3");
  text(potionResult, width / 2, height / 2 + 10);

 }




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rectX = width / 2 - 200;
}






