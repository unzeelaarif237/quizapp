var quizData = [
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Colorful Style Sheets",
        c: "Creative Style Sheets",
        d: "Computer Style Sheets",
        correct: "a",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "class",
        b: "style",
        c: "font",
        d: "styles",
        correct: "b",
    },
    {
        question: "Which property is used to change the background color?",
        a: "bgcolor",
        b: "background-color",
        c: "color",
        d: "background",
        correct: "b",
    },
    {
        question: "How do you add a comment in CSS?",
        a: "// This is a comment",
        b: "/// This is a comment///",
        c: "/* This is a comment */",
        d: "# This is a comment",
        correct: "c",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-size",
        b: "text-size",
        c: "text-style",
        d: "font-style",
        correct: "a",
    },
    {
        question: "Which of the following is the correct CSS syntax?",
        a: "body:color=black;",
        b: "{body;color:black;}",
        c: "body {color: black;}",
        d: "body:color black;",
        correct: "c",
    },
    {
        question: "What is the default value of the position property?",
        a: "relative",
        b: "absolute",
        c: "fixed",
        d: "static",
        correct: "d",
    },
    {
        question: "Which property is used to change the font of an element?",
        a: "font-family",
        b: "font-style",
        c: "font-weight",
        d: "text-font",
        correct: "a",
    },
    {
        question: "How do you select an element with id 'header'?",
        a: "#header",
        b: ".header",
        c: "header",
        d: "*header",
        correct: "a",
    },
    {
        question: "Which property is used to control the spacing between lines of text?",
        a: "line-height",
        b: "spacing",
        c: "height",
        d: "text-spacing",
        correct: "a",
    }
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