// define an array of objects with answers
var myQuestions = [
    {
        question: "Who won the first season of Drag Race?",
        answers: {
            0: "Bebe Zahara Benet",
            1: "Akashia",
            2: "Shannel"
        },
        correctAnswer: 0
    },

    {
        question: "Who was the runner up in the first season?",
        answers: {
            0: "Ongina",
            1: "Nina Flowers",
            2: "Shannel"
        },
        correctAnswer: 1
    }
];

// create a function that posts elements of the object to the web page;
function questionBuilder(questionNumber) {
    // builds question
    console.log(myQuestions[questionNumber].question);
    document.getElementById("question").innerHTML = myQuestions[questionNumber].question;

    // builds answers
    var len = $.map(myQuestions[questionNumber].answers, function (index, answer) {
        return answer;
    }).length;
    console.log(len);

    for (var i = 0; i < len; i++) {
        var answers = $("<div>");
        var answerIndex = i;
        var currentAnswer = $("<h2></h2>").text(myQuestions[questionNumber].answers[answerIndex]);
        console.log(myQuestions[questionNumber].answers[answerIndex]);
// assign radio buttons to each element ;
        var radioBtn = $('<input type="radio" name="rbtnCount" />');
        $("#answers").append(answers, currentAnswer, radioBtn);
    }
}


questionBuilder(0);

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            // if answer is wrong or blank
            // color the answers red
            answerContainers[questionNumber].style.color = "red";
        }
    });
}


// use a function to count answers and display to correct answers variable.













