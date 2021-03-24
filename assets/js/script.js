//DOM VARIABLES
var startBtn = document.querySelector("#start-btn");
var timerEl = document.querySelector(".timer-count");
var quizCont = document.querySelector(".container");
// var = document.getElementById("");

//JAVASCRIPT VARIABLES
//store array of objects - (3 types of data: question-string, potential choices-array of strings - add data attributes to see what the user clicked vs correct choice, correct choice)
var questions = [
    {
        question : "Commonly used data types DO NOT include:",
        choices : ["strings", "booleans", "alerts", "numbers"],
        correct : "alerts"
    },{
        question : "The condition in an if/else statement is enclosed within ___.",
        choices : ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct : "parentheses"
    },{
        question : "Arrays in JavaScript can be used to store ____.",
        choices : ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct : "all of the above"
    },{
        question : "String values must be enclosed within ____ when being assigned to variables.",
        choiceA : ["commas", "curly brackets", "quotes", "parentheses"],
        correct : "quotes"
    },{
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices : ["JaaScript", "terminal/bash", "for loops", "console.log"],
        correct : "console.log"
    }
];

// FUNCTION VARIABLES
var timer;
var timerCount;
var isWin = false;

// EVENT LISTENERS
//WHAT HAPPENS WHEN I CLICK START
quizCont.addEventListener("click", startGame);

startBtn.addEventListener("click", startGame);

// FUNCTION CALLS
function startGame () {
    timerCount = 60;
    startBtn.disabled = true;
    // quizStart();
    startTimer();
}

// function to start quiz
function quizStart (){
    //clear out every time 
    quizCont.innerHTML("");
    quizCont.textContent(".quiz")

// }

//function results () {

//}

// quizStart();

// on submit, show results
// submitBtn.addEventListener("click", showResults);

function renderChoices() {
    // TODO: Describe the functionality of the following two lines of code.
    // Wipe out the existing DOM to add the array todos
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
    
    // We iterate over the todos array. For every todo, we follow our 3-step process.
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      // 1. Create an element.
      var li = document.createElement("li");
      // 2. Add content to the element.
      li.textContent = todo;
      li.setAttribute("data-index", i);
  ​
      var button = document.createElement("button");
      button.textContent = "Complete ✔️";
  ​
      // 3. Append to an existing element.
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }



//TIMER
function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
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


  //innerHtml : wipes everything out between answers
  //3 step process to dynamically generate content: create element, add attributes/content, and append to existing element
  //highscores - do second to last 