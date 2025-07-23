let diarypara1 = "Today we got extra superpowers not like the ones in Marvel. Different like from the unierse. Do you Know which. We got star power!";
let diarypara2 = "Star power many have not heard of such. But we got them. Why us? Why not someone else. At the time we had many juniors how were me and Regan supposed to manage this.";
let diaryPara3 = "At the the first minute the 5 of us were able to cry 5 gallons. I wonder if Regan felt the same way. We had gotten two new members, Mewbug, and Skitters.";


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);

}

function draw() {
  background(20,10,40,30); // semi-transparent background for trailing effect

  // Star core
  fill(255, 220, 250);
  ellipse(width / 2, height / 2, 50 + sin(frameCount * 0.1) * 10);

  // Spark particles
  for (let i = 0; i < 5; i++) {
    let x = width / 2 + random(-40, 40);
    let y = height / 2 + random(-40, 40);
    fill(random(200, 255), random(100, 150), 255, 180);
    ellipse(x, y, random(5, 10));
      diary();
  }


}
function diary (){
  fill(255); // White text
textSize(18);
  background(255,255,255);
background(20,10,40,30); // semi-transparent background for trailing effect
   text(diarypara1,50,50,windowWidth*0.60);
};
