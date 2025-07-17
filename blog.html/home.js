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
function drawBlogHome(){
image(blogImg1,50,200,336*1.5,192*1.5);
image(blogImg2,536+100,200,336*1.5,192*15);


}
