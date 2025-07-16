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
image(blogImg1,100,250,336,192);
image(blogImg2,536,250,336,192);


}
