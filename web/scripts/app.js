function populate() {
    if(quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};


function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "QUESTION " + currentQuestionNumber + '/' + quiz.questions.length;
};


function showScores() {
    var gameOverHtml = "<h1>RESULT</h1>";
    gameOverHtml += "<h2 id='score'> YOUR SCORES: " + quiz.score + "</h2>";
    gameOverHtml += "<h3> This is just a prototype to show the idea,\n of course, real project could and should be\n more complex! </h3>"
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml; 
}



/*

Scarlet: FF2400
Imperial Red: #ed2939
Indian Red: #cd5c5c
Spanish Red: #e60026
Carmine: #960018
Crimson: #DC143C

*/



var questions = [
    new Question("Which one of these is Scarlet?", ["a", "b", "c", "d", "e", "f"], "a"),
    new Question("Which one of these is Imperial Red?", ["a", "b", "c", "d", "e", "f"], "b"),
    new Question("Which one of these is Indian Red?", ["a", "b", "c", "d", "e", "f"], "c"),
    new Question("Which one of these is Spanish Red?", ["a", "b", "c", "d", "e", "f"], "d"),
    new Question("Which one of these is Carmine?", ["a", "b", "c", "d", "e", "f"], "e"),
    new Question("Which one of these is Crimson?", ["a", "b", "c", "d", "e", "f"], "f")
];


var quiz = new Quiz(questions);

populate();