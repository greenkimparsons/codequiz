//DOM VARIABLES
var startBtn = document.querySelector("#start-btn");
var timerEl = document.querySelector(".timer-count");
var quizCont = document.querySelector(".question");
var choiceEl = document.querySelector("#choiceList");
var choiceEl1 = document.querySelector("#choice1");
var choiceEl2 = document.querySelector("#choice2");
var choiceEl3 = document.querySelector("#choice3");
var choiceEl4 = document.querySelector("#choice4");
var choicesArr = [];

choicesArr.push(choiceEl1);
choicesArr.push(choiceEl2);
choicesArr.push(choiceEl3);
choicesArr.push(choiceEl4);

//JAVASCRIPT VARIABLES
//store array of objects - (3 types of data: question-string, potential choices-array of strings - add data attributes to see what the user clicked vs correct choice, correct choice)
var indexOfArr = 0;
var quizParam = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: 2
    },{
        question: "The condition in an if/else statement is enclosed within ___.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correct: 2
    },{
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: 3
    },{
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correct: 2
    },{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correct: 3
    }
];

// FUNCTION VARIABLES
var timer;
var timerCount;
var isWin = false;

// EVENT LISTENERS
//WHAT HAPPENS WHEN I CLICK START
// quizCont.addEventListener("click", startGame);

startBtn.addEventListener("click", startGame);

// FUNCTION CALLS
function startGame () {
    timerCount = 60;
    // startBtn.disabled = true;
    startTimer();
    quizStart();
}

// function to start quiz
function quizStart (){
    //clear out to new question every time 
    quizCont.innerHTML = "";
    // //getting the first question to appear after start btn is clicked
    quizCont.setAttribute("data-state", "visible");
    quizCont.textContent = quizParam[indexOfArr].question; //starting with first question
    //how to make a list of the choices
    for(var i = 0; i < choicesArr.length; i++){
        // console.log(quizParam[i].choices[i]);
        console.log(choicesArr[i]);
        // var choiceBtn = document.createElement("button"); //creating a button for every choice
        choicesArr[i].textContent = quizParam[i].choices[i];
        // var li = document.createElement("li");
        // li.textContent = choiceBtn;
        // choiceBtn.setAttribute("data-index", i);

        
        
        // li.appendChild(choiceBtn);
        // choiceEl.appendChild(li);
    }
    // console.log(choiceBtn.textContent);
}

function checkAnswer(){
    // if it does match increa

    // indexOfArr++
    // run getNextQuestion
}

function getNextQuestion (){
    if(indexOfArr < quizParam.length){
        quizStart();
    } else {
        endGame();
    }
}

//function results () {

//}

// quizStart();

// on submit, show results
// submitBtn.addEventListener("click", showResults);

//TIMER
function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = "Time: " + timerCount + " seconds";
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
        }
    }, 1000);
}


// // The init() function fires when the page is loaded 
// function init() {
//     // When the init function is executed, the code inside renderLastGrade function will also execute
//     renderLastGrade();
//   }
//   init();


  //3 step process to dynamically generate content: create element, add attributes/content, and append to existing element
  //highscores - do second to last 