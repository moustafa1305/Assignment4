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
    answers: [
      "&lt;js&gt;",
      "&lt;scripting&gt;",
      "&lt;script&gt;",
      "&lt;javascript&gt;",
    ],
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

var examTimer;
var score = 0;
var highScores = [2, 55, 23, 45, 67, 11];
var currentQuestionIndex = 0;
var givenTime = 90;
var wrongAnswerFine = 5;

function getQuestion() {
  if (currentQuestionIndex >= questions.length) {
    var currentTime = document.getElementById("countdown").textContent;
    score = parseInt(currentTime);
    setHighScores(score);
    document.getElementById("next_button").style.display = "none";
    document.getElementById("result").innerHTML = "Quiz Over";
    stopTimer();
    document.getElementById("startQuizAgain").style.display = "block";
    document.getElementById("question").innerHTML = "";
    document.getElementById("answers_list").innerHTML = "";
  } else {
    document.getElementById("result").innerHTML = "";
    document.getElementById("next_button").disabled = true;
    currentQuestion = questions[currentQuestionIndex];
    var question = document.getElementById("question");
    question.innerHTML = questions[currentQuestionIndex]["question"];

    var answer = questions[currentQuestionIndex]["answers"];
    var answersList = "";
    for (var i = 0; i < answer.length; i++) {
      answersList +=
        "<li id=" +
        i +
        " onClick='clickAnswer(this.id)'>" +
        answer[i] +
        "</li>";
    }
    document.getElementById("answers_list").innerHTML =
      "<ol>" + answersList + "</ol>";
    currentQuestionIndex++;
    console.log(questions.length);
  }
}

// timer

function setTimer(givenTime, wrongAnswer = false) {
  if (wrongAnswer) {
    clearInterval(examTimer);
    setTimer(givenTime);
  } else {
    examTimer = setInterval(function () {
      if (givenTime <= 0) {
        document.getElementById("countdown").innerHTML = "Finished";
        document.getElementById("result").innerHTML = "Quiz Over";
        document.getElementById("next_button").style.display = "none";
        setHighScores(0);
        document.getElementById("startQuizAgain").style.display = "block";
        document.getElementById("question").innerHTML = "";
        document.getElementById("answers_list").innerHTML = "";
      } else {
        document.getElementById("countdown").innerHTML = givenTime;
      }
      givenTime -= 1;
    }, 1000);
  }
}

function startQuiz() {
  var howToPlay = document.getElementById("how-to-play");
  howToPlay.style.display = "none";
  currentQuestionIndex = 0;
  givenTime = 90;

  getQuestion();
  setTimer(givenTime);
  document.getElementById("next_button").style.display = "block";
  document.getElementById("questions").style.display = "block";
  document.getElementById("btn_high_score").style.display = "none";
  document.getElementById("startQuizAgain").style.display = "none";
}

function startQuizAgain() {
  document.getElementById("startQuizAgain").style.display = "none";
  document.getElementById("btn_high_score").style.display = "none";
  document.getElementById("countdown").innerHTML = "";
  currentQuestionIndex = 0;
  getQuestion();
  clearInterval(examTimer);
  setTimer(givenTime);
  document.getElementById("next_button").style.display = "block";
}

function clickAnswer(clicked_id) {
  var correctAnswer = questions[currentQuestionIndex - 1]["correctAnswer"];

  if (correctAnswer == clicked_id) {
    document.getElementById("result").innerHTML = "Correct";
    document.getElementById(clicked_id).style.border = "1px solid green";
    document.getElementById("next_button").disabled = false;
  } else {
    if (document.getElementById("result").textContent != "Correct") {
      document.getElementById("result").innerHTML = "Not Correct";
      document.getElementById(clicked_id).style.border = "1px solid red";
      var currentTime = document.getElementById("countdown").textContent;
      var timeLeft = currentTime - wrongAnswerFine;
      setTimer(timeLeft, true);
    }
  }
}

function stopTimer() {
  clearInterval(examTimer);
}

function setHighScores(score) {
  highScores.push(score);
  highScores = Array.from(new Set(highScores));
  highScores = highScores.sort(function (a, b) {
    return b - a;
  });
  highScores = highScores.slice(0, 5);
  document.getElementById("score").innerHTML = score;
  document.getElementById("btn_high_score").style.display = "block";
}

function showHighScores() {
  var output = "";
  for (var i = 0; i < highScores.length; i++) {
    output += "<li>" + highScores[i] + "</li>";
  }
  output = "<ol>" + output + "</ol>";
  document.getElementById("high_score").innerHTML =
    "<h2>Top 5 High Scores</h2>" + output;
  document.getElementById("questions").style.display = "none";
  document.getElementById("high_scores").style.display = "block";
  document.getElementById("how-to-play").style.display = "none";
  document.getElementById("countdown").innerHTML = "";
  document.getElementById("btn_high_score").style.display = "none";
}

function backToHome() {
  document.getElementById("high_scores").style.display = "none";
  document.getElementById("how-to-play").style.display = "block";
  document.getElementById("btn_high_score").style.display = "block";
}
