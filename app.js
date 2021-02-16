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
const progress = document.querySelector(".progress");
const overlay = document.querySelector('.overlay');
const rules = document.querySelector('.rules');
const returnBtn = document.querySelector('#returnBtn');
const backBtn = document.querySelector('#backBtn');
const returnMain = document.querySelector('.returnMain');
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
  pam_office : {
    number: "1",
    question: "How long had Pam been engaged to Roy in Season 1?",
    option1: "One Year",
    option2: "Three Years",
    option3: "Eight Years",
    correctAnswer: "Three Years",
  },
  jim_office: {
    number: "2",
    question: "TATATA 2",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  dwight_office: {
    number: "3",
    question: "TATATA 3",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  michael_office: {
    number: "4",
    question: "TATATA 4",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  phyllis_office: {
    number: "5",
    question: "TATATA 5",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  kelly_offce: {
    number: "6",
    question: "TATATA 6",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  stanley_office: {
    number: "7",
    question: "TATATA 7",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  oscar_office: {
    number: "8",
    question: "TATATA 8",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  angela_office: {
    number: "9",
    question: "TATATA 9",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  ryan_office: {
    number: "10",
    question: "TATATA 10",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  daryl_office: {
    number: "11",
    question: "TATATA 11",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  toby_office: {
    number: "12",
    question: "TATATA 12",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  kevin_office: {
    number: "13",
    question: "TATATA 13",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  andy_office: {
    number: "14",
    question: "TATATA 14",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  },
  creg_office: {
    number: "15",
    question: "TATATA 15",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    correctAnswer: "TATATA",
  }
}


function handleClick(evt) {
  console.log(evt.target.id)
  console.log(questions[evt.target.id]);
  displayQuestion(questions[evt.target.id]);
  questionDisplay.style.display = "flex";
  option1.style.display = "flex";
  option2.style.display = "flex";
  option3.style.display = "flex";
  overlay.style.display = "flex";
  return question;
}
allTrophees.forEach(function(trophee) {
  trophee.onclick = handleClick;
});

function startGame() {
  page2.style.display = "grid";
  page2.style.visibility = "visible";
  returnMain.style.display = "flex";
  questionDisplay.style.display = "none";
  page1.style.display = "none";
  page1.style.visibility = "none";
  progress.style.display = "none";
  correctAnswers = 0;
  console.log("hello");
  console.log("OK????");
}

buttonStart.onclick = startGame;
console.log(buttonStart);

function rulesofGame() {
  page4.style.display = "flex";
  rules.style.display = "flex";
  page4.style.visibility = "visible";
  questionDisplay.style.display = "none";
  page1.style.display = "none";
  page1.style.visibility = "none";
  progress.style.display = "none";
  correctAnswers = 0;
  console.log("hello");
  console.log("OK????");
}

buttonRules.onclick = rulesofGame;
console.log(buttonRules);

function returnHome() {
  page4.style.display = "none";
  rules.style.display = "none";
  page4.style.visibility = "none";
  questionDisplay.style.display = "none";
  page1.style.display = "block";
  page1.style.visibility = "visible";
  progress.style.display = "none";
  correctAnswers = 0;
  console.log("hello");
  console.log("OK????");
}

returnBtn.onclick = returnHome;
console.log(returnBtn);

function backHome() {
  page2.style.display = "none";
  page2.style.visibility = "none";
  questionDisplay.style.display = "none";
  page1.style.display = "block";
  page1.style.visibility = "visible";
  progress.style.display = "none";
  correctAnswers = 0;
  console.log("hello");
  console.log("OK????");
}

backBtn.onclick = backHome;
console.log(backBtn);

function displayProgress(currentQuestion) {
  var progress = document.querySelector(".progress");
  progress.innerHTML = `This is ${currentQuestion} of 10 dundies.`;
}

function displayQuestion(office) {
  questionDisplay.innerHTML = office.question;
  option1.innerHTML = office.option1;
  option2.innerHTML = office.option2;
  option3.innerHTML = office.option3;
}

function checkAnswer(e, question) {
  if (e.target.innerHTML === question.correctAnswer) {
    correctAnswers++;
  }
}
function showScore(correctAnswers) {
  var score = document.getElementById("score");
  score.innerHTML = `You got ${correctAnswers} out of 10 dundies!`;
  page1.style.visibility = "visible";
  page2.style.visibility = "hidden";
  page3.style.visibility = "visible";
  gameOver.style.visibility = "visible";
  startText.innerHTML = "Play Again";
  buttonStart.style.visibility = "visible";
}

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
