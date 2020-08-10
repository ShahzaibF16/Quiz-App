function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
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
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("When did Pakistan break from British India to become a country?", ["1914", "1939","1947", "1979"], "1947"),
    new Question("Who led the push for the creation of an independent Pakistan and is considered the founder of the nation?", ["Liaquat Ali Khan", "Muhammad Ali Jinnah", "Zulfiqar Ali Bhutto", "Asif ALi Zardari"], "Muhammad Ali Jinnah"),
    new Question("What is the capital of Pakistan?", ["Islamabad", "Karachi","Peshawar", "Lahore"], "Islamabad"),
    new Question("Which country does not border Pakistan?", ["India", "Afganistan", "Nepal", "Iran"], "Nepal"),
    new Question("Where is K2?", ["Tian Shan", "Hindu Kush", "Karakorum", "Pamir"], "Karakorum"),
    new Question("Who was the first woman prime Minister of Pakistan?", ["Sherry Rehman", "Sonia Gandhi", "Benazir Bhutto", "Indira Gandhi"], "Benazir Bhutto"),
    new Question("Who is considered the Father of Pakistan’s Nuclear Program?", ["Pervez Musharraf", "Nawaz Sharif", "Zia ul-Haq","Abdul Qadeer Khan"], "Abdul Qadeer Khan"),
    new Question("What percent of Pakistan’s population is literate?", ["11", "33", "55", "92"], "55"),
    new Question("Who is the Youngest Microsoft Certified Professional (MCP) from Pakistan", ["Arfa Karim","Babar Iqbal","Malala YousufZai","Somail Hassan"], "Babar Iqbal"),
    new Question("World’s Largest Deep Sea Port Is In Pakistan! Where is it?",["Multan","Bin Qasim","Karachi Port","Gwadar"],"Gwadar")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();