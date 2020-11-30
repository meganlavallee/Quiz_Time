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

function questionCheck() {
  if (questionIndex < myQuiz.length) {
    nextQuestion()
  } else {
    displayScore()
  }
}

function displayScore() {
  console.log("End")
  // Hiding Questions
  // Stopping Timer
  // Display Score
}

questionCheck();

var myTimer = {
  
}

// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

setTime();