//DOM VARIABLES
var = document.getElementById("");
var = document.getElementById("");

//JAVASCRIPT VARIABLES
var = 

// FUNCTION VARIABLES


// EVENT LISTENERS
saveButton.addEventListener("click", function(event) {
    event.preventDefault(); //prevents from refreshing and resetting the page
    saveLastGrade();
    renderLastGrade();
    });
// FUNCTION CALLS

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



// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastGrade();
  }
  init();

  //starting the quiz
  //event listeners - what happens when i click start
  //store array of objects - (3 types of data: question-string, potential choices-array of strings - add data attributes to see what the user clicked vs correct choice, correct choice)
  //innerHtml : wipes everything out between answers
  //3 step process to dynamically generate content: create element, add attributes/content, and append to existing element
  //highscores - do second to last 
  //timer - do last