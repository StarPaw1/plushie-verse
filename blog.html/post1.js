let blogPara1 ="Hello! My name is StarPaw. You're probably thinking 'who is this StarPaw',well I am the programmer of this website 😉. I am also the leader of PAWSPARK, I know you are thinking PAW what now, well I will tell you all about me and PAWSPARK!";
let me;
let blogPara2 = "PAWSPARK is team of super plushies that help out those in need in Aqualand. Aqualand a city with many lakes and  ponds. On Aqualand's streets you can find plushies walking around and doing daily things like watering their gardens or going to the store. In total there are 50 ponds in aqualand 10 are hidden and only I can find them. ";
let blogPara3 = "    Hey I have been talking about PAWSPARK but I have never really introduced them. Well then I have to tell you all about this amazing team. First up the CO-Head Brody D. a dinosaur squishmallow, He loves hot cocoa and is really strong. Next up second in command after the CO Head Mewbug the Potion maker she makes potions that are purrfect for her crazy vibe she is a green cat, also in love with the next member. Next up the wild card Skitters he is super fast you never know where he will pop up next he is a dog and is also in love with Mewbug. Next make sure you never underestimate Tiny she makes super sonic frequencies that will blow you away, she is a small owl. Next we have the eye in the sky Scrumples, she is a pink bunny. Next our musician, Dabney the artic fox who brings the frost. Last but not least Starfluff the super smart polar bear. ";

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
  fill(142, 242, 210);
text(blogPara2,windowWidth* 0.15,390,windowWidth*0.375);
  fill(73, 227, 255);
text(blogPara3,windowWidth*0.1,570,windowWidth*0.75);
}
