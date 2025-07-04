let team;
function preload(){
team = loadImage('Team-photo.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  image(team,350,50,500,500);
  
}
