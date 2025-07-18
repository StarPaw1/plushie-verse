let blogPara1 ="Hello! My name is StarPaw. You're probably thinking 'who is this StarPaw',well I am the programmer of this website 😉. I am also the leader of PAWSPARK, I know you are thinking PAW what now, well I will tell you all about me and PAWSPARK!";
let me;
function preload(){
me = loadImage("me.png");

};
function setup(){
createCanvas(windowWidth,windowHeight*2.5);
textAlign(LEFT, TOP);
textSize(35); // Optional: Makes it more readable
  post1();  

};
function post1(){

  fill(166,196,241);
text(blogPara1,windowWidth* 0.1,150,windowWidth*0.75);
image(me,windowWidth*0.1+windowWidth*0.45,240+125,336,384);

}
