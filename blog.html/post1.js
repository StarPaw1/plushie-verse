let blogPara1 ="Hello! My name is StarPaw. You're probably thinking 'who is this StarPaw',well I am the programmer of this website 😉. I am also the leader of PAWSPARK, I know you are thinking PAw what now, well I will tell you all about me and PAWSPARK!";

function setup(){
createCanvas(windowWidth,windowHeight*2.5);
textAlign(LEFT, TOP);
textSize(40); // Optional: Makes it more readable
  post1();  

};
function post1(){
  fill(166,196,241);
text(blogPara1,windowWidth-1000,150,600);


}
