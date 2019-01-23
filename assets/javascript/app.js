var panel = $("#game-board");
var countStartNumber = 30;

// Question set
var mainPicture = {
    image: ['./assets/images/yara.jpeg'],
};

var questions = [
    {
        question: "Who won the first season of Drag Race?",
        answers: ["Bebe Zahara Benet", "Akashia", "Shannel"],
        correctAnswer: "Bebe Zahara Benet",
        image: './assets/images/Bebe.gif',
        questionImage: ['./assets/images/bebe.jpg', './assets/images/akashia.jpeg', './assets/images/shannel.jpeg']
    },
    {
        question: "Who was the runner up in the first season?",
        answers: ["Ongina", "Nina Flowers", "Manila Luzon"],
        correctAnswer: "Nina Flowers",
        image: './assets/images/nina.gif',
        questionImage: ['./assets/images/ongina.jpeg', './assets/images/nina.jpeg', './assets/images/manila.jpeg']
    },
    {
        question: "Which contestant won season 3?",
        answers: ["Yara Sofia", "Manila Luzon", "Raja"],
        correctAnswer: "Raja",
        image: './assets/images/raja.gif',
        questionImage: ['./assets/images/yara.jpeg', './assets/images/manila.jpeg', './assets/images/raja.jpeg']
    },
    {
        question: "Who was disqualified in season 4?",
        answers: ["Kenya Michaels", "Willam Belli", "Sharon Needles"],
        correctAnswer: "Willam Belli",
        image: './assets/images/willam.gif',
        questionImage: ['./assets/images/kenya.jpeg', './assets/images/willam.jpeg', './assets/images/sharon.jpeg']
    },
    {
        question: "Who impersonated Michael Jackson in Snatch Game?",
        answers: ["Naomi Smalls", "Acid Betty", "Thorgy Thor"],
        correctAnswer: "Thorgy Thor",
        image: './assets/images/thorgy.gif',
        questionImage: ['./assets/images/naomi.jpeg', './assets/images/acid.jpeg', './assets/images/thorgy.jpeg']
    },
    {
        question: "Detox sashayed away after lip syncing against who?",
        answers: ["Jinkx Monsoon", "Roxxxy Andrews", "Coco Montrese"],
        correctAnswer: "Jinkx Monsoon",
        image: './assets/images/jinkx.gif',
        questionImage: ['./assets/images/jinkx.jpeg', './assets/images/roxy.png', './assets/images/coco.jpg']
    },
    {
        question: "Who didn't know the words to Greedy by Ariana Grande?",
        answers: ["Valentina", "Farrah Moan", "Shea Couleé"],
        correctAnswer: "Valentina",
        image: './assets/images/valentina.gif',
        questionImage: ['./assets/images/valentina.jpg', './assets/images/farrah.jpg', './assets/images/shea.jpg']
    },
];

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    time: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        game.time--;
        $("#time-counter").html(game.time);
        if (game.time === 0) {
            game.timeOut();
        }
    },

    questionBuilder: function () {
        $( ".main-pic" ).remove();

        timer = setInterval(game.countdown, 1000);

        panel.html("<h2 class='question'>" + questions[this.currentQuestion].question + "</h2>");

        panel.append($('<div class="row justify-content-center"></div>'));

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            var answers = $("<div class='col-auto'>");
            var image = $("<img class='answer-button' data-name='" + questions[this.currentQuestion].answers[i] + "'>" ).attr("src", questions[this.currentQuestion].questionImage[i]);
            answers.append(image);
            var cardImageOverlay = ($("<div class='container'></div>"));
            cardImageOverlay.append($("<h2></h2>").text(questions[this.currentQuestion].answers[i]));
            answers.append(cardImageOverlay);
            $('.row').append(answers);
        }
    },

    nextQuestion: function () {
        game.time = countStartNumber;
        $("#time-counter").html(game.time);
        game.currentQuestion++;
        game.questionBuilder();
    },

    timeOut: function () {

        clearInterval(timer);

        $("#time-counter").html(game.time);

        panel.html("<h2>You Outta Time Gurl!</h2>");
        panel.append("<h3>Now That's Shade: " + questions[this.currentQuestion].correctAnswer);
        panel.append("<img  class='gif' src='" + questions[this.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    results: function () {

        clearInterval(timer);

        panel.html("<h2>I Dont Know Why Yall Gagging?? She Bring It To You Every Ball...</h2>");

        $("#time-counter").html(game.time);

        panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
        panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        panel.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
        panel.append("<br><button id='start-over'>Start Over?</button>");
    },

    onClick: function (e) {
        clearInterval(timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
            this.answeredCorrectly();
        } else {
            this.answeredIncorrectly();
        }
    },


    answeredIncorrectly: function () {

        game.incorrect++;

        clearInterval(timer);

        panel.html("<h2>Really Girl??</h2>");
        panel.append("<h3>Here's A Bit Of Herstory Darling... " + questions[game.currentQuestion].correctAnswer + "</h3>");
        panel.append("<img class='gif' src='" + questions[game.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    answeredCorrectly: function () {

        clearInterval(timer);

        game.correct++;

        panel.html("<h2>Shantay You Stay Kitty Girl!!</h2>");
        panel.append("<img class='gif' src='" + questions[game.currentQuestion].image + "' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    reset: function () {
        this.currentQuestion = 0;
        this.time = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.questionBuilder();
    }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function () {
    game.reset();
});

$(document).on("click", ".answer-button", function (e) {
    game.onClick(e);
});

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h2>Tea Minus: <span id='time-counter'>30</span> Seconds</h2>");
    game.questionBuilder();
});

// document.getElementById("time-counter").innerHTML= game.time;



