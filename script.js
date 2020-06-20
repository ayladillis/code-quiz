
var timeEl = document.querySelector(".time");

var addBtn = document.querySelector("#add-btn");
var initialsListEl = document.querySelector("#people-list");
var initialsEl = document.querySelector("#initial");
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

var secondsLeft = 75;

var initialsEl = [{ name: " "}];

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }