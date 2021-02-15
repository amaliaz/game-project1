const page1 = document.querySelector('#page-1');
const page2 = document.querySelector('#page-2');
const page3 = document.querySelector('#page-3');
const allButtons = document.querySelector('#buttons');
const allElements = document.querySelector('#all-elements');
const gameName = document.querySelector('#game-name');
const buttonStart = document.querySelector('#start-game');
const buttonRules = document.querySelector('#how-to-play');
const gameOver = document.querySelector('.gameOver');
const wonGame = document.querySelector('.wonGame');
const score = document.querySelector('#score');
const startText = document.querySelector('#startText');
const rulesOfGameText =document.querySelector('#rulesOfGameText');
const questionDisplay =document.querySelector('.question');
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");


var correctAnswers = 0;
let question;

function startGame(){
    page1.style.visibility = "visible";
    page2.style.visibility = "visible";
    page3.style.visibility = "hidden";
    correctAnswers = 0;
    questionOne();
  }
// buttonStart.onclick="window.location.href='/page2";
buttonStart.onclick = startGame();

var questionOne = () => {
    question = {
    number: "1",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionTwo = () => {
    question = {
    number: "2",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionThree = () => {
    question = {
    number: "3",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionFour = () => {
    question = {
    number: "4",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionFive = () => {
    question = {
    number: "5",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionSix = () => {
    question = {
    number: "6",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionSeven = () => {
    question = {
    number: "7",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionEight = () => {
    question = {
    number: "8",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionNine = () => {
    question = {
    number: "9",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };
  var questionTen = () => {
    question = {
    number: "9",
    question: "TATATA",
    option1: "tatatta",
    option2: "tatatta",
    option3: "tatatta",
    option4: "Jtatatta",
    correctAnswer: "TATATA"
    };
    displayQuestion(question);
    displayProgress(question.number);
    return question;
  };


  function displayProgress(currentQuestion){
    var progress = document.querySelector(".progress");
    progress.innerHTML = `This is ${currentQuestion} of 10 dundies.`
  }

  function displayQuestion(question){
    questionDisplay.innerHTML = question.question;
    option1.innerHTML = question.option1;
    option2.innerHTML = question.option2;
    option3.innerHTML = question.option3;
  }

  function checkAnswer(e, question){
    if (e.target.innerHTML === question.correctAnswer){
      correctAnswers++;
    }
  }
  function showScore(correctAnswers){
    var score = document.getElementById("score");
    score.innerHTML = `You got ${correctAnswers} out of 10 dundies!`;
    page1.style.visibility = "hidden";
    page2.style.visibility = "hidden";
    page3.style.visibility = "visible";
    gameOver.style.visibility = "visible";
    startText.innerHTML = "Play Again";
    buttonStart.style.visibility = "visible";
  }

  startGame();
questionOne();

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
