let star;
let starShow = false;
function preload(){
star = loadImage('star.png');

}
let bloggin = false;
document.getElementById("depressed").addEventListener("click", function() {

   const button1 = document.getElementById("depressed");
  starShow = true;
  button1.style.color = "rgb(40, 244, 99)";
  bloggin = true;
  if (bloggin) {
  button1.style.backgroundColor = "rgb(140, 182, 255)";
}
});
function setup(){
  createCanvas(windowWidth,windowHeight);
 
  
}
function draw(){
  background(250);
   fill(23,89,230);
  ellipse(windowWidth/2,windowHeight/2,windowWidth/16,windowWidth/16);
  if(starShow){
    image(star,windowWidth/15,windowHeight/4)
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
