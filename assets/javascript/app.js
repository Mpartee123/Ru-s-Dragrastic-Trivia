// define an array of objects with answers
var numberCorrect = 0;
document.getElementById('correct-answers').innerText = numberCorrect;

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
            0: url = ('./assets/images/Bebe.gif'),
            1: url = ('./assets/images/Akashia.gif'),
            2: url = ('./assets/images/Shannel.gif')

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
        var answerIndex = i;
        var answers = $("<div class=' col-md-auto card populatedAnswer'>").attr("answer-index", i);
        var image = $("<img class='card-img img-responsive'>").attr("src", myQuestions[questionNumber].image[answerIndex]);
        answers.append(image);
        var cardImageOverlay = ($("<div class='card-img-overlay'></div>").attr("title-index", [i]));
        cardImageOverlay.append($("<h2 class='card-title'></h2>").text(myQuestions[questionNumber].answers[answerIndex]));
        answers.append(cardImageOverlay);
        console.log(myQuestions[questionNumber].answers[answerIndex]);
        $("#answers").append(answers);
        console.log(answerIndex);
    }
}


questionBuilder(0);

// todo ui should start with populating first object using the question builder function

//todo once proper card has been selected ui should tally score and refresh card with new question

//todo once all questions have been answered score should populate

//todo add timer functionality


// $(".populatedAnswer").on("click",function () {
//     if (){}
//     else(){}
// });

// count radio buttons that have been selected
// use a function to count answers and display to correct answers variable.


// make a function that detects when an answer is clicked and send the proper information to the proper string.














