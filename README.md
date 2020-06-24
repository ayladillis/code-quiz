# Code-Quiz
Code Quiz homework 04 

The purpous of this assignment was to use HTML, CSS and Javascript to create a dinamicly functioning quiz that moved between the quiz questions, which were being timed, and a high scores page. 

## Acceptance Criteria

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

### Tools

* Zoom
* Slack
* GitHub
* GitLab
* BootCamp Code Drills
* Slack Overflow
* Google
* Youtube
* w3School
* Ramon Sanchez (my tutor)

## Code Snippets 

* The following code function I used to hide the start button and text on the inital page seen when opening the link. Throught the use of 'style.display' being set equal to 'none' I was able to vanish the elements I wanted before dieplaying the quiz questions with the same function 'style.display' but this time set squal to 'block'. 

function startQuiz(){
    timer();
    start.style.display = "none";
    textbox.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

* I hit alot of walls while working on this Code Quiz but one that I was able to break through with the help of my tutor was the timer! Something important I learned while working on this project was how to better use functions. 

let seconds = 75; 

function tick() {
    if (seconds > 0) {
        seconds -=1;
        clock.innerHTML = seconds;
        timer();
    }else{
        stopClock();
    }
}

function timer() {
    t = setTimeout(tick, 1000);
}

## Screenshots 

* The following screenshot was from the first meeting with my tutor when he helped me set up my initial code and explained to me what variables to set up. 

<img src="screenshot1.png" alt="screenshot of my code">

## Deploy Link

* [See Live Site](https://ayladillis.github.io/code-quiz/)

## Authors

Ayla Dillis

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScrip)






