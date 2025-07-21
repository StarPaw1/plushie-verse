let quizData;
let answers = { Brody: 0, Mewbug: 0, Skitters: 0, Scrumples: 0, Tiny: 0, Dabney: 0,Starfluff: 0 };
let currentQuestion = 0;
let result = "";

function setup() {
  createCanvas(600, 400);

  quizData = [
    {
      question: "What’s your ideal Weekend?",
      options: [
        { label: "Eating candy", character: "Skitters" },
        { label: "Studying Math and Coding", character: "Starfluff" },
        { label: "Building a spaceship", character: "Brody" },
        { label: "Riding rainbows", character: "Scrumples" },
        { label: "Playing video games", character: "Tiny" },
        { label: "Inventing chaos Potions", character: "Mewbug" },
        {label:"Playing Music",character:"Dabney"}
      ],
    },
    {
    question: "What Superpower do you want?",
    options: [ 
      {label: "Super Speed", character: "Skitters"},       
      {label:"Inteligence",character:"Starfluff"},
      {label: "Strength", character: "Brody"},
      {label:"Flight",character:"Scrumples"},
      {label:"Sonic blasts",character:"Tiny"},
      {label:"Potion maker",character"Mewbug"},
      {label:"Musical notes",character:"Dabney"},
      ], 
  {
    question: "How super are you",
    options: [
      {label:"90%",character:"Skitters"},
      {label:"5%",character:"Starfluff"},
      {label:"15%",character:"Brody"},
      {label:"50%",character:"Scrumples"},
      {label:"75%",character:"Tiny"},
      {label:"I don't know",character:"Mewbug"},
      {label:"45%",character:"Dabney"},
      
    ]
  },
    // Add 2 more questions just like these ones!
  ];
}

function draw() {
  background(255);

  if (currentQuestion < quizData.length) {
    let q = quizData[currentQuestion];
    textSize(20);
    text(q.question, 20, 40);

    for (let i = 0; i < q.options.length; i++) {
      let btnY = 100 + i * 40;
      fill(200);
      rect(20, btnY, 500, 30);
      fill(0);
      text(q.options[i].label, 30, btnY + 20);
    }
  } else {
    // Show final result
    textSize(24);
    text("You are most like: " + result, 100, 200);
  }
}

function mousePressed() {
  if (currentQuestion < quizData.length) {
    let q = quizData[currentQuestion];
    for (let i = 0; i < q.options.length; i++) {
      let btnY = 100 + i * 40;
      if (mouseY > btnY && mouseY < btnY + 30) {
        answers[q.options[i].character]++;
        currentQuestion++;
        if (currentQuestion === quizData.length) {
          result = getTopCharacter();
        }
        break;
      }
    }
  }
}

function getTopCharacter() {
  let top = "";
  let max = -1;
  for (let char in answers) {
    if (answers[char] > max) {
      max = answers[char];
      top = char;
    }
  }
  return top;
}
