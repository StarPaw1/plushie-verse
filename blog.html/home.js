let blogImg1;
let blogImg2;
 function preload(){
blogImg1= loadImage("blog-1.png");
blogImg2=loadImage("blog-2.png");
 }
function setup(){
createCanvas (windowWidth,windowHeight*6);
rectMode(CORNER);
drawBlogHome();
 }
function mousePressed() {
  // Check if blogImg1 was clicked
  if (mouseX > 50 && mouseX < 50 + 336*1.5 &&
      mouseY > 200 && mouseY < 200 + 192*1.5) {
    window.location.href = "post1.html"; // Go to Post 1
  }


}

function drawBlogHome(){
 textSize(35);
 fill(236, 236, 254);
image(blogImg1,50,200,336*1.5,192*1.5);
image(blogImg2,536+100,200,336*1.5,192*1.5);
text("Meet PAWSPARK",30,270);

}
