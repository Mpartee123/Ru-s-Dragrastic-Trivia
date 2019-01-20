// define an array of objects with answers

var myQuestions = [
    {
        question: "Who won the first season of Drag Race?",
        answers: {
            0: "Bebe Zahara Benet",
            1: "Akashia",
            2: "Shannel"
        },
        correctAnswer: 0,
        image: {
            0 : url=('./assets/images/Bebe.gif'),
            1 : url=('./assets/images/Akashia.gif'),
            2 : url=('./assets/images/Shannel.gif')

        }
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
        var answers = $("<div class='populatedAnswer'>");
        var answerIndex = i;
        answers.attr("answer-index", i);
        var currentAnswer = $("<h2></h2>").text(myQuestions[questionNumber].answers[answerIndex]);
        var picture = $("<img>").attr("src", myQuestions[questionNumber].image[answerIndex]);
        console.log(myQuestions[questionNumber].answers[answerIndex]);
// assign radio buttons to each element ;
//         var radioBtn = $('<input type="radio" name="rbtnCount" />');
        // $("#answers").append(answers, currentAnswer, radioBtn);
        $("#answers").append(answers, currentAnswer,picture);
    }
}


questionBuilder(0);

// $(".populatedAnswer").on("click",function () {
//     if (){}
//     else(){}
// });

// count radio buttons that have been selected
// use a function to count answers and display to correct answers variable.


// make a function that detects when an answer is clicked and send the proper information to the proper string.














