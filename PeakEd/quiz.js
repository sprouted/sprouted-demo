// $('bronze-badge').hide();
// $('silver-badge').hide();
// $('gold-badge').hide();

function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().question;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();

    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " " + "of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1> Result </h1>";
    gameOverHtml += "<h2 id='score'> Your score:  " + quiz.score + "</h2>" +
        "<br> <h2> The answers were: <ol> <li>5x<sup>2</sup> + x - 3</li> <li> 4 </li> <li>2%</li> </ol> </h2> <br> <img src='./css/GoldBadge.png' style='height:50%; width:50%;'/> <br> <h1>Gold Badge</h1>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}


var questions = [
    new Question("10x<sup>3</sup> - 3x<sup>2</sup> - 7x + 3 ÷ 2x-1 = ", ["5x<sup>2</sup> + x + 3", "5x<sup>2</sup> - x + 3", "5x<sup>2</sup> - x - 3", "5x<sup>2</sup> + x - 3"],
        "5x<sup>2</sup> + x - 3"),

    new Question("For the system shown below, what is the value of z? <br> y = -2x + 14 <br> 3x -  4z = 2 <br> 3x - y = 16", ["5", "2", "6", "4"], "4"),

    new Question("Judith puts $5000 into an investment account with interest compounded continuously. Which approximate annual rate is needed for the account to grow to $9110 after 30 years?", ["2%", "2.2%", "0.02%", "0.022%"], "2%")

];

var quiz = new Quiz(questions);