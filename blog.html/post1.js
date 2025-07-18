let blogPara1 ="Hello! My name is StarPaw. You're probably thinking 'who is this StarPaw',well I am the programmer of this website 😉. I am also the leader of PAWSPARK, I know you are thinking PAW what now, well I will tell you all about me and PAWSPARK!";
let me;
let blogPara2 = "PAWSPARK is team of super plushies that help out those in need in Aqualand. Aqualand a city with many lakes and  ponds. On Aqualand's streets you can find plushies walking around and doing daily things like watering their gardens or going to the store. In total there are 50 ponds in aqualand 10 are hidden and only I can find them. ";
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
  fill(35,245,136);
text(blogPara2,windowWidth* 0.1,390,windowWidth*0.375);
}
