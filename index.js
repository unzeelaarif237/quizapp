var quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "Which is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Malta",
        correct: "b",
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Au",
        b: "Ag",
        c: "Fe",
        d: "Pb",
        correct: "a",
    },
    {
        question: "Which element has the atomic number 1?",
        a: "Oxygen",
        b: "Hydrogen",
        c: "Carbon",
        d: "Nitrogen",
        correct: "b",
    },
    {
        question: "What year did the Titanic sink?",
        a: "1912",
        b: "1905",
        c: "1898",
        d: "1920",
        correct: "a",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        a: "Charles Dickens",
        b: "Mark Twain",
        c: "William Shakespeare",
        d: "Jane Austen",
        correct: "c",
    },
];

var quiz = document.getElementById("quiz");
var submitButton = document.getElementById("submit");
var result = document.getElementById("result");
var nextButton = document.getElementById("next");

var currentQuiz = 0;
var score = 0;

function loadQuiz() {
    var currentQuizData = quizData[currentQuiz];

    quiz.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <ul class="options">
            <li>
                <input type="radio" name="answer" id="a" value="a">
                <label for="a">${currentQuizData.a}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="b" value="b">
                <label for="b">${currentQuizData.b}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="c" value="c">
                <label for="c">${currentQuizData.c}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="d" value="d">
                <label for="d">${currentQuizData.d}</label>
            </li>
        </ul>
    `;
}

function getSelected() {
    var answers = document.querySelectorAll('input[name="answer"]');
    var answer;

    answers.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.value;
        }
    });

    return answer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Display the score
            result.innerHTML = `You scored ${score} out of ${quizData.length}`;
            // Hide the submit button and show the next button
            submitButton.style.display = "none";
            nextButton.style.display = "block";
        }
    }
});


function getSelected() {
    var answers = document.querySelectorAll('input[name="answer"]');
    var answer;

    answers.forEach(function(answerElement) {
        if (answerElement.checked) {
            answer = answerElement.value;
        }
    });

    return answer;
}

submitButton.addEventListener("click", function() {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Display the score
            result.innerHTML = "You scored " + score + " out of " + quizData.length;
            // Hide the submit button and show the next button
            submitButton.style.display = "none";
            nextButton.style.display = "block";
        }
    }
});

// Add event listener for the Next button
nextButton.addEventListener("click", function() {
    // Redirect to the sidebar page
    window.location.href = "sidebar.html"; // Change this to your actual sidebar page URL
});

// Load the first quiz question
loadQuiz();

function clock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var Time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = Time;
}

// Update the clock every second
setInterval(clock, 1000);