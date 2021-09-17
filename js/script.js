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

function startQuiz() {
  var howToPlay = document.getElementById("how-to-play");
  howToPlay.style.display = "none";

  var question = document.getElementById("question");
  question.innerHTML = questions[0]["question"];

  document.getElementById("next_button").style.display = "block";
  var answer = questions[0]["answers"];
  var answerList = "";
  for (var i = 0; i < answer.length; i++) {
    answerList +=
      "<li id=" + i + " onClick='clickAnswer(this.id)'>" + answer[i] + "</li>";
  }
  document.getElementById("answers_list").innerHTML =
    "<ol>" + answerList + "</ol>";

  var givenTime = 90;
  startTimer(givenTime);
}

function clickAnswer(clicked_id) {
  //document.getElementsByClassName
  //document.getElementsByClassName("active")[0].classList.remove("active");
  document.getElementById(clicked_id).classList.add("active");
  var cAnswer = questions[0]["correctAnswer"];
  var gAnswer = clicked_id;
  if (cAnswer == gAnswer) {
    document.getElementById("result").innerHTML = "Correct";
  } else {
    document.getElementById("result").innerHTML = "Not Correct";
    var currentTime = document.getElementById("countdown").textContent;
    var timeLeft = currentTime - 30;
    var wrongAnswer = true;
    //startTimer(timeLeft, wrongAnswer);
    //startTimer(timeLeft);
    console.log("wrongAnswer");
  }
}

function startTimer(givenTime, wrongAnswer = false) {
  //var givenTime = 90; // seconds
  var examTimer = setInterval(function () {
    if (givenTime <= 0) {
      document.getElementById("countdown").innerHTML = "Finished";
    } else {
      document.getElementById("countdown").innerHTML = givenTime;
    }
    givenTime -= 1;
  }, 1000);
}
