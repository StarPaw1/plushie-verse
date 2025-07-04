let team;
function preload(){
team = loadImage('Team-photo.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  image(team,100,100,500,500);
  
}
