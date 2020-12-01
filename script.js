var myQuiz = [
  {
    ques: "When did modern photography begin?",
    choices: ["1730", "1810", "1830", "1750"],
    correctAnswer: "1830",
  },
  {
    ques: "First commercially viable photographic process was called what?",
    choices: [
      "Daguerreotype Process",
      "Obscura Image Projection",
      "Collodion Process",
    ],
    correctAnswer: "Daguerreotype Process",
  },
  {
    ques: "The word photography was coined by Sir John Herschel in 1839.  It's basis is in the ___ language?",
    choices: ["Italian", "Greek", "Latin", "Arabic"],
    correctAnswer: "Greek",
  },
  {
    ques: "What was the first mass produced camera?",
    choices: ["Brownie", "Kodak", "Raisecamera"],
    correctAnswer: "Brownie",
  },
  {
    ques: "What is not a rule of composition in photography?",
    choices: ["Leading Lines", "Reduce Clutter", "Color Constrast", "All Are"],
    correctAnswer: "All Are",
  },
];

var questionIndex = 0; // Not started

function nextQuestion() {
  document.body.innerHTML = "";
  document.write(myQuiz[questionIndex].ques + "<br />");
  
  for (var j = 0; j < myQuiz[questionIndex].choices.length; j++) {
    document.write(
      "<input type=radio id=myRadio name=radAnswer>" +
      myQuiz[questionIndex].choices[j] +
      "<br />"
      );
    }
    
    if (questionIndex < myQuiz.length) {
      var nextButton = document.createElement("input");
      nextButton.type = "button";
      nextButton.value = "Submit";
      nextButton.addEventListener("click", questionCheck);
      document.body.appendChild(nextButton);
      ++questionIndex;
    }
  }
  
  // Hiding Questions
function questionCheck() {
  if (questionIndex < myQuiz.length) {
    nextQuestion()
  } else {
    displayScore()
  }
}

// Display Score
function displayScore() {
  
  console.log("End")
}

questionCheck();

// Timer
var myTimer = {
}

  function myTimer() {
    document.querySelector(".timer");
    document.getElementById("time");
    console.log("Timer Working")
}

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    
    // Stopping Timer
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      displayScore();
    }
  }, 1000);
}


setTime();

// Local Storage
function correctAnswer() {
  window.localStorage.setItem('user', JSON.stringify(correctAnswer));
  window.localStorage.setItem('name', 'key');

  JSON.parse(window.localStorage.getItem('user'));
  window.localStorage.getItem('user');
  }