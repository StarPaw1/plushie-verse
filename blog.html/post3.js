let star;
let angle = 0;
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


    rotate(angle);
  background(250);
   fill(23,89,230);
   push();
   rotate(0);
  ellipse(windowWidth/4,windowHeight/4,windowWidth/16,windowWidth/16);
   pop();
  if(starShow){
     push();
     translate()
    image(star,windowWidth/15,windowHeight/4,windowWidth/16,windowWidth/16);
     
     rotate(angle);
     angle+=0.01;
     pop();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
