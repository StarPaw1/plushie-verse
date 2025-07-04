let brodyImg;
let mewbug;
function preload() {
  brodyImg = loadImage("brody-card.png"); // file name with space
  mewbug = loadImage("Mewbug-card.png");
}
let BrodyAbout="Brody loves to bust baddies get into action!";



 
function setup() {
  createCanvas(windowWidth, 3000);
  background(220);
  fill(150, 100, 255);
  

  
image(brodyImg,100,100,288,400);
image(mewbug,488,100,288,400);
  textSize(30);
  text(BrodyAbout,78,550,300);
  text("Mewbug is talented at making potions.She makes them with the rarest materials.",488,550,300);
  

  
  
  
}
