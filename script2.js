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
    ques:
      "The word photography was coined by Sir John Herschel in 1839.  It's basis is in the ___ language?",
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
]; //end of myQuiz array of objects

var questionIndex = -1; // Not started

function nextQuestion() {
  document.body.innerHTML = "";
  ++questionIndex;
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
    nextButton.addEventListener("click", nextQuestion);
    document.body.appendChild(nextButton);
  }
}

nextQuestion();
