// Magic 8-Ball functionality module
var magicBall = (function() {
    var listofanswers = [
        "Yes",
        "No",
        "Probably",
        "I'm not sure",
        "Maybe",
        "You really want to know the answer?",
        "Yes, absolutely!!!",
        "Be careful",
        "Sorry, but my answer is negative"
    ];

    function getAnswer(question) {
        var randomIndex = Math.floor(Math.random() * listofanswers.length);
        var answer = listofanswers[randomIndex];

        var ballImage = document.getElementById("8ball");
        ballImage.classList.add("shake");

        var answerText = document.getElementById("answer");
        answerText.textContent = answer;

        // Задержка перед отображением ответа
        setTimeout(function() {
            answerText.style.display = "block";
        }, 146); // Здесь 146 - это задержка в миллисекундах

        ballImage.src = "img/ans.png";
    }

    return {
        getAnswer: getAnswer
    };
})();

// DOM manipulation module
document.addEventListener("DOMContentLoaded", function() {
    var answerText = document.getElementById("answer");
    answerText.style.display = "none";

    var questionButton = document.getElementById("questionButton");
    questionButton.addEventListener("click", function() {
        var question = prompt("Ask the question where I can answer Yes or No");
        magicBall.getAnswer(question);
    });
});
