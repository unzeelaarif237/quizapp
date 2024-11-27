var quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Text Markup Language",
        c: "Hyperlink and Text Markup Language",
        d: "None of the above",
        correct: "a",
    },
    {
         question : "Who is making the Web standards?",
         a: "Google",
         b: "Who is making the Web standards?",
         c: "Microsoft",
         d: "Moziall",
         correct:"b"
        },
    {
        question: "Which of the following is not an attribute of <from> tag?",
        a: "Action",
        b: "Method",
        c: "name",
        d: "url",
        correct: "d",
    },
    {
        question:"HTML is a subset of?",
        a: "SGMT",
        b: "SGMD",
        c: "SGML",
        d: "None of these",
        correct: "c",
    },
    {
        question: "A webpage display a picture what tag was used to display that picture ?",
        a: "picture",
        b: "img",
        c: "image",
        d: "src",
        correct: "b",
    },
    {
        question: "HTML tags are enclosed?",
        a: "curly brackets",
        b: "Square brackets",
        c: "double bracket ",
        d: "angular bracket",
        correct: "a",
    },
    {
        question: "which tag make the largest heading",
        a: "H1",
        b: "H2",
        c: "H3",
        d:"H4",
        correct: "a",
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