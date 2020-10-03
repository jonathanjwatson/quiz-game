$(document).ready(function () {
  console.log("Hello world");
  console.log(questions);

  var welcomeDiv = $("#welcome");
  var beginBtn = $("#begin-quiz");
  var quizDiv = $("#quiz");

  var qIndex = 0;

  function displayQuestion() {
    quizDiv.show();
    $("#quiz-content").empty();
    $("#quiz-content").append($("<h1>" + questions[qIndex].title + "</h1>"));
    for (var i = 0; i < questions[qIndex].choices.length; i++) {
      var currentChoiceDiv = $("<div class='row'>");
      var currentChoiceBtn = $("<button class='btn btn-primary choice'>");
      currentChoiceBtn.text(questions[qIndex].choices[i]);
      currentChoiceBtn.attr("data-choice", questions[qIndex].choices[i]);
      currentChoiceDiv.append(currentChoiceBtn);
      $("#quiz-content").append(currentChoiceDiv);
    }
  }

  function gameOver(){
      // Stop the timer
      quizDiv.hide();
      $("#game-over").show();
  }

  beginBtn.on("click", function () {
    welcomeDiv.hide();
    displayQuestion();
  });

  $("#quiz-content").on("click", ".choice", function () {
    console.log($(this).attr("data-choice"));
    if ($(this).attr("data-choice") === questions[qIndex].answer) {
      alert("That is correct!");
    } else {
      alert("That is incorrect!");
    }

    if (qIndex === questions.length - 1) {
      gameOver();
    } else {
      qIndex++;
      displayQuestion();
    }
  });
});
