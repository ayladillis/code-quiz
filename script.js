
var timeEl = document.querySelector(".time");

let startButton = document.querySelector("#start-button");
let startScreen = document.getElementById("#start-screen");
let question1 = document.getElementById("questions1");

// var addBtn = document.querySelector("#add-btn");
// var initialsListEl = document.querySelector("#people-list");
// var initialsEl = document.querySelector("#initial");

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

var secondsLeft = 75;

var initialsEl = [{ name: " "}];

//Start button
startButton.addEventListener('click', function(event) {
    event.preventDefault();
    startScreen.setAttribute("style", "display: none;");
    question1.setAttribute("style", "display: block");
})



 