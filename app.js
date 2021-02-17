const page1 = document.querySelector("#page-1");
const page2 = document.querySelector("#page-2");
const page3 = document.querySelector("#page-3");
const page4 = document.querySelector("#page-4");
const allButtons = document.querySelector("#buttons");
const allElements = document.querySelector("#all-elements");
const gameName = document.querySelector("#game-name");
const buttonStart = document.querySelector("#start-game");
const buttonRules = document.querySelector("#how-to-play");
const gameOver = document.querySelector(".gameOver");
const wonGame = document.querySelector(".wonGame");
const score = document.querySelector("#score");
const startText = document.querySelector("#startText");
const rulesOfGameText = document.querySelector("#rulesOfGameText");
const questionDisplay = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const allOptions = document.querySelectorAll(".option");
const progress = document.querySelector(".progress");
const overlay = document.querySelector(".overlay");
const rules = document.querySelector(".rules");
const returnBtn = document.querySelector("#returnBtn");
const backBtn = document.querySelector("#backBtn");
const allTrophees = document.querySelectorAll(".trophee");

var correctAnswers = 0;
let question;

// var questionOne = () => {
//   question = {
//     number: "1",
//     question: "TATATA",
//     option1: "tatatta",
//     option2: "tatatta",
//     option3: "tatatta",
//     correctAnswer: "TATATA",
//   };
//   displayQuestion(question);
//   displayProgress(question.number);
//   return question;
// };

const questions = {
  pam_office: {
    number: "1",
    question: "Which award does Pam receive at the Dundies?",
    option1: "Hottest in the office award",
    option2: "Whitest sneakers award",
    option3: "Fine work award",
    correctAnswer: "option2",
    clicked: false,
  },
  jim_office: {
    number: "2",
    question: "What does Jim put in a jello mold first?",
    option1: "Stapler",
    option2: "Phone",
    option3: "Pen",
    correctAnswer: "option1",
    clicked: false,
  },
  dwight_office: {
    number: "3",
    question: "What does Dwight’s family farm produce?",
    option1: "Beets",
    option2: "Carrots",
    option3: "Milk",
    correctAnswer: "option1",
    clicked: false,
  },
  michael_office: {
    number: "4",
    question: "What is Michael’s favorite phrase?",
    option1: "I’m Beyoncé, always.",
    option2: "I’m not superstitious, but I am a little ‘stitious.",
    option3: "that's what she said",
    correctAnswer: "option3",
    clicked: false,
  },
  phyllis_office: {
    number: "5",
    question: "Phylllis was happily married to :",
    option1: "Bob Vance",
    option2: "Bob Lance",
    option3: "Bob Gass",
    correctAnswer: "option1",
    clicked: false,
  },
  kelly_offce: {
    number: "6",
    question: "What Is Kelly's Date Of Birth?",
    option1: "June 13th 1979",
    option2: "February 5th 1980",
    option3: "November 29th 1982",
    correctAnswer: "option2",
    clicked: false,
  },
  stanley_office: {
    number: "7",
    question: "What does Stanley typically do during meetings?",
    option1: "Crossword puzzles",
    option2: "Drinks tea",
    option3: "Eats pretzels",
    correctAnswer: "option1",
    clicked: false,
  },
  oscar_office: {
    number: "8",
    question: "What does Oscar do during the fire drill?",
    option1: "Runs towards the door",
    option2: "Goes under his desk",
    option3: "Climbs through the ceiling",
    correctAnswer: "option3",
    clicked: false,
  },
  angela_office: {
    number: "9",
    question: "Which of Angela’s cats does Dwight freeze?",
    option1: "Petals",
    option2: "Sprinkles",
    option3: "Lumpy",
    correctAnswer: "option2",
    clicked: false,
  },
  ryan_office: {
    number: "10",
    question:
      "What was Ryan trying to heat up in the toaster oven when he started a fire?",
    option1: "A cheesy pita",
    option2: "An apple pie",
    option3: "A pizza",
    correctAnswer: "option1",
    clicked: false,
  },
  daryl_office: {
    number: "11",
    question: "Which Member Of The Office Did Darryl Date?",
    option1: "Karen",
    option2: "Erin",
    option3: "Kelly",
    correctAnswer: "option3",
    clicked: false,
  },
  toby_office: {
    number: "12",
    question: "Where Does Toby Move In Season 4?",
    option1: "Costa Rica",
    option2: "Australia",
    option3: "Canada",
    correctAnswer: "option1",
    clicked: false,
  },
  kevin_office: {
    number: "13",
    question: "Who did Kevin get for his secret Santa?",
    option1: "Meredith",
    option2: "Michael",
    option3: "Himself",
    correctAnswer: "option3",
    clicked: false,
  },
  andy_office: {
    number: "14",
    question:
      "What is Andy’s nickname for Jim for the early days of their relationship?",
    option1: "Big Man",
    option2: "Big Fish",
    option3: "Big Tuna",
    correctAnswer: "option3",
    clicked: false,
  },
  creed_office: {
    number: "15",
    question: "What Is Creed's Job Title?",
    option1: "Quality Assurance Director",
    option2: "Head of supplier relations",
    option3: "Head of customer relations",
    correctAnswer: "option1",
    clicked: false,
  },
};

var theDefinedOffice;

function handleClick(evt) {
  if (!questions[evt.target.id].clicked) {
    questions[evt.target.id].clicked = true;
    // console.log(evt.target.id)
    // console.log(questions[evt.target.id]);
    theDefinedOffice = evt.target.id;
    displayQuestion(questions[evt.target.id]);
    questionDisplay.style.display = "flex";
    option1.style.display = "flex";
    option2.style.display = "flex";
    option3.style.display = "flex";
    overlay.style.display = "flex";
  } 
  return question;
}
allTrophees.forEach(function (trophee) {
  trophee.onclick = handleClick;
});

function handleAnswer(evt) {
  // console.log(theDefinedOffice);
  if (evt.target.id === questions[theDefinedOffice].correctAnswer) {
    // console.log("I'm right");
    page3.style.display = "flex";
    page3.style.visibility = "visible";
    wonGame.style.display = "flex";
    setTimeout(function () {
      wonGame.style.display = "none";
    }, 5000);
    wonGame.style.visibility = "visible";
    gameOver.style.display = "none";
    gameOver.style.visibility = "none";
    questionDisplay.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    overlay.style.display = "none";
    checkAnswer(evt.target.id);
  } else {
    // {
    //   console.log("I'm wrong");
    // }
    page3.style.display = "flex";
    page3.style.visibility = "visible";
    wonGame.style.display = "none";
    wonGame.style.visibility = "none";
    gameOver.style.display = "flex";
    setTimeout(function () {
      page3.style.display = "none";
  page3.style.visibility = "none";
  gameOver.style.display = "none";
  gameOver.style.visibility = "none";
  backBtn.style.visibility = "none";
  backBtn.style.display = "none";
    }, 5000);
    gameOver.style.visibility = "visible";
    questionDisplay.style.display = "none";
    backBtn.style.visibility = "visible";
    backBtn.style.display = "flex";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    overlay.style.display = "none";
  }
  showScore(correctAnswers);
  // console.log(questions);
}

allOptions.forEach(function (option) {
  option.onclick = handleAnswer;
});

function startGame() {
  page2.style.display = "grid";
  page2.style.visibility = "visible";
  questionDisplay.style.display = "none";
  page1.style.display = "none";
  page1.style.visibility = "none";
  showScore(correctAnswers);
  // console.log("hello");
  // console.log("OK????");
}

buttonStart.onclick = startGame;
// console.log(buttonStart);

function rulesofGame() {
  page4.style.display = "flex";
  rules.style.display = "flex";
  page4.style.visibility = "visible";
  questionDisplay.style.display = "none";
  page1.style.display = "none";
  page1.style.visibility = "none";
  correctAnswers = 0;
  // console.log("hello");
  // console.log("OK????");
}

buttonRules.onclick = rulesofGame;
// console.log(buttonRules);

function returnHome() {
  page4.style.display = "none";
  rules.style.display = "none";
  page4.style.visibility = "none";
  questionDisplay.style.display = "none";
  page1.style.display = "block";
  page1.style.visibility = "visible";
  correctAnswers = 0;
  // console.log("hello");
  // console.log("OK????");
}

returnBtn.onclick = returnHome;
// console.log(returnBtn);

function exitButton() {
  page2.style.display = "none";
  page2.style.visibility = "none";
  page3.style.display = "none";
  page3.style.visibility = "none";
  gameOver.style.display = "none";
  gameOver.style.visibility = "none";
  backBtn.style.visibility = "none";
  backBtn.style.display = "none";
  questionDisplay.style.display = "none";
  page1.style.display = "block";
  page1.style.visibility = "visible";
  correctAnswers = 0;
  // console.log("hello");
  // console.log("OK????");
  questions[theDefinedOffice].clicked=false;
}

backBtn.onclick = exitButton;
// console.log(backBtn);

function displayQuestion(office) {
  questionDisplay.innerHTML = office.question;
  option1.innerHTML = office.option1;
  option2.innerHTML = office.option2;
  option3.innerHTML = office.option3;
}
function checkAnswer(e) {
  if (e === questions[theDefinedOffice].correctAnswer) {
    correctAnswers++;
  }
  console.log("hello" + questions[theDefinedOffice].correctAnswer)
}
function showScore(correctAnswers) {
  score.innerHTML = `You got ${correctAnswers} out of 10 dundies!`;
}



// function displayProgress(currentQuestion) {
//   var progress = document.querySelector(".progress");
//   progress.innerHTML = `This is ${currentQuestion} of 10 dundies.`;
// }


//On each click, check selected option and change to next question.
// options.on('click', function(e){
//   if (e.target.classList.contains("option")){
    
//     checkAnswer(e, question);
//   } else {
//     console.log("answer not selected");
//   }
    
// });


//   function moveToNextQuestion(currentQuestion){
//     switch (currentQuestion){
//       case "1":
//         questionTwo();
//         break;
//         case "2":
//         questionThree();
//         break;
//         case "3":
//         questionFour();
//         break;
//         case "4":
//         questionFive();
//         break;
//         case "5":
//         showScore(correctAnswers);
//         break;
//       default:
//     }
//   }

//Magnifier Glass
// function magnify(imgID, zoom) {
//   var img, glass, w, h, bw;
//   img = document.getElementById(imgID);
//   /*create magnifier glass:*/
//   glass = document.createElement("DIV");
//   glass.setAttribute("class", "img-magnifier-glass");
//   /*insert magnifier glass:*/
//   img.parentElement.insertBefore(glass, img);
//   /*set background properties for the magnifier glass:*/
//   glass.style.backgroundImage = "url('" + img.src + "')";
//   glass.style.backgroundRepeat = "no-repeat";
//   glass.style.backgroundSize =
//     img.width * zoom + "px " + img.height * zoom + "px";
//   bw = 3;
//   w = glass.offsetWidth / 2;
//   h = glass.offsetHeight / 2;
//   /*execute a function when someone moves the magnifier glass over the image:*/
//   glass.addEventListener("mousemove", moveMagnifier);
//   img.addEventListener("mousemove", moveMagnifier);
//   /*and also for touch screens:*/
//   glass.addEventListener("touchmove", moveMagnifier);
//   img.addEventListener("touchmove", moveMagnifier);
//   function moveMagnifier(e) {
//     var pos, x, y;
//     /*prevent any other actions that may occur when moving over the image*/
//     e.preventDefault();
//     /*get the cursor's x and y positions:*/
//     pos = getCursorPos(e);
//     x = pos.x;
//     y = pos.y;
//     /*prevent the magnifier glass from being positioned outside the image:*/
//     if (x > img.width - w / zoom) {
//       x = img.width - w / zoom;
//     }
//     if (x < w / zoom) {
//       x = w / zoom;
//     }
//     if (y > img.height - h / zoom) {
//       y = img.height - h / zoom;
//     }
//     if (y < h / zoom) {
//       y = h / zoom;
//     }
//     /*set the position of the magnifier glass:*/
//     glass.style.left = x - w + "px";
//     glass.style.top = y - h + "px";
//     /*display what the magnifier glass "sees":*/
//     glass.style.backgroundPosition =
//       "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
//   }
//   function getCursorPos(e) {
//     var a,
//       x = 0,
//       y = 0;
//     e = e || window.event;
//     /*get the x and y positions of the image:*/
//     a = img.getBoundingClientRect();
//     /*calculate the cursor's x and y coordinates, relative to the image:*/
//     x = e.pageX - a.left;
//     y = e.pageY - a.top;
//     /*consider any page scrolling:*/
//     x = x - window.pageXOffset;
//     y = y - window.pageYOffset;
//     return { x: x, y: y };
//   }
// }
// magnify("image-dundies", 2);
