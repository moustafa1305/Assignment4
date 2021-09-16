var questions = [
  {
    question: "1. What are variables used for in JavaScript Programs?",
    answers: [
      "Storing numbers, dates, or other values;",
      "Varying randomly;",
      "Causing high-school algebra flashbacks;",
      "None of the above;",
      "All of the above;",
    ],
    correctAnswer: 0,
  },
  {
    question: "2. Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correctAnswer: 2,
  },
  {
    question: "3. Which of the following best describes JavaScript?",
    answers: [
      "a low-level programming language.",
      "a scripting language precompiled in the browser.",
      "a compiled scripting language.",
      "an object-oriented scripting language.",
    ],
    correctAnswer: 3,
  },
  {
    question: "4. What will this output? var a = [1, 2, 3]; console.log(a[6]);",
    answers: ["undefined", "0", "prints nothing", "Syntax error"],
    correctAnswer: 0,
  },
  {
    question:
      "5. Using **___** statement is how you test for a specific condition.;",
    answers: ["Select", "If", "Switch", "for"],
    correctAnswer: 1,
  },
  {
    question: "6. Which software company developed JavaScript?",
    answers: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
    correctAnswer: 1,
  },
];

function startQuize() {
  var howToPlay = document.getElementById("how-to-play");
  howToPlay.style.display = "none";

  var question = document.getElementById("question");
  question.innerHTML = questions[0]["question"];

  document.getElementById("next_button").style.display = "block";
  var answer;
  var answerList = "";
  for (var i = 0; i <= questions[0]["answers"].length; i++) {
    answerList += "<li>" + questions[0]["answers"][i] + "</li>";
  }
  document.getElementById("answers_list").innerHTML =
    "<ul>" + answerList + "</ul>";
}
