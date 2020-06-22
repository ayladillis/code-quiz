
var timeEl = document.querySelector("timer");

let startButton = document.getElementById("#start-button");
let startScreen = document.getElementById("#start-screen");
let quiz = document.getElementById("#quiz");
let question = document.getElementById("#question");

let choiceA = document.getElementById("#A");
let choiceB = document.getElementById("#B");
let choiceC = document.getElementById("#C");

var secondsLeft = 75;

var initialsEl = [{ name: " "}];

//Timer

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + "seconds remaining";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 7500);
}

//Start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {

}


// startButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     startScreen.setAttribute("style", "display: none;");
//     question1.setAttribute("style", "display: block");
// })

//Quiz Questions

let questions = [
    {
        question: "what does HTML stand for?",
        choiceA: "hyper text markup language",
        choiceB: "home tool markup langauge",
        choiceC: "hyperlink tool makeup language",
        correct: "A"
    },
    {
       question: "what does CSS stand for?" ,
       choiceA: "consistent styling sheets",
       choiceB: "cascading style sheets",
       choiceC: "choosing style sheets",
       correct: "B"
    },
    {
        question: "what are the three main languages of the internet?",
        choiceA: "HTML, CSS, Javascript",
        choiceB: "HTML, CSS, Python",
        choiceC: "HTML, Javascript, Python",
        correct: "A"
    },
    {
        question: "which site can you create repositories on?",
        choiceA: "GitLink",
        choiceB: "GitLab",
        choiceC: "GitHub",
        correct: "C"
    },
    {
        question: "what is Jerome's favorite animal?",
        choiceA: "cat",
        choiceB: "dog",
        choiceC: "guinea pig",
        correct: "A"
    }
];

//to access questions
questions[0].question
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].correct


 