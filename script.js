
// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const counter = document.getElementById("counter");

const time = document.getElementById("time");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("score");

// create questions
let questions = [
    {
        question : "what does HTML stand for?",
        choiceA : "hyper text markup language",
        choiceB : "home tool markup langauge",
        choiceC : "hyperlink tool makeup language",
        correct : "A"
    },{
       question : "what does CSS stand for?" ,
       choiceA : "consistent styling sheets",
       choiceB : "cascading style sheets",
       choiceC : "choosing style sheets",
       correct : "B"
    },{
        question : "what are the three main languages of the internet?",
        choiceA : "HTML, CSS, Javascript",
        choiceB : "HTML, CSS, Python",
        choiceC : "HTML, Javascript, Python",
        correct : "A"
    },{
        question : "which site can you create repositories on?",
        choiceA : "GitLink",
        choiceB : "GitLab",
        choiceC : "GitHub",
        correct : "C"
    },{
        question : "what is Jerome's favorite animal?",
        choiceA : "cat",
        choiceB : "dog",
        choiceC : "guinea pig",
        correct : "A"
    }
];
// assign variables 

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 75; 
let TIMER;
let score = 0;

// function to make questions appear 
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
  
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    textbox.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// move through questions
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

//time



// score

function renderCounter(){
    if(count <= time){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is right
        score++;
       
    }else{
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

//answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

//answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
// calculate the questions correct
const scorePerCent = Math.round(100 * score/questions.length);
    
}


