let team;
function preload(){
team = loadImage('Team-photo.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  image(team,500,300,200,200);
  
}
