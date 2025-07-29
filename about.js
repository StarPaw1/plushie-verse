let brodyImg;
let mewbug;
let skitters;
let tiny;
let scrumples;
let dabney;
let starfluff;
function preload() {
  brodyImg = loadImage("brody-card.png"); // file name with space
  mewbug = loadImage("Mewbug-card.png");
  skitters = loadImage("Skitters-card.png");
  tiny = loadImage("tiny-card.png");
  scrumples = loadImage("scrumples-card.png");
  dabney = loadImage("dabney-card.png");
  starfluff= loadImage("Starfluff-card.png");
}
let BrodyAbout="Brody loves to bust baddies get into action!";



 
function setup() {
  createCanvas(windowWidth, 3000);
  background(220);
  fill(150, 100, 255);
  

  
image(brodyImg,100,100,288,400);
image(mewbug,488,100,288,400);
image(skitters,876,100,288,400);
image(tiny,100,700,288,400);
image(scrumples,488,700,288,400);
image(dabney,876,700,288,400);
image(starfluff,100,1300,288,400);
  textSize(30);
  text(BrodyAbout,100,550,300);
  text("Mewbug loves making potions.She uses rare elements to make them",488,550,300);
  text("The wild card... You never know where he will pop up next!",876,550,300);
  text("Tiny may be small but is always in action with her sonic blasts!",100,1150,300);
  text("The sky view, Scrumples loves cruising in the clouds.",488,1150,300);
  text("The music lover. She plays awesome tunes with her magic flute.",876,1150,300);
  text("The new trainee. He is from the Cosmos!",100,1750,300);

  
  
  
}
