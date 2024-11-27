var quizData = [
    {
        question: "What does JS stand for?",
        a: "JavaScript",
        b: "JavaSource",
        c: "JustScript",
        d: "JScript",
        correct: "a",
    },
    {
        question: "Which of the following is a JavaScript data type?",
        a: "String",
        b: "Boolean",
        c: "Number",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "function:myFunction()",
        c: "create myFunction()",
        d: "def myFunction()",
        correct: "a",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "=",
        b: ":=",
        c: "==",
        d: "===",
        correct: "a",
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        a: "JSON.parse()",
        b: "JSON.stringify()",
        c: "JSON.convert()",
        d: "JSON.object()",
        correct: "a",
    },
    {
        question: "Which of the following is not a JavaScript framework?",
        a: "React",
        b: "Vue",
        c: "Django",
        d: "Angular",
        correct: "c",
    },
    {
        question: "What is the correct syntax to output 'Hello World' in JavaScript?",
        a: "echo 'Hello World';",
        b: "print('Hello World');",
        c: "console.log('Hello World');",
        d: "response.write('Hello World');",
        correct: "c",
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        a: "It refers to the global object",
        b: "It refers to the current object",
        c: "It refers to the parent object",
        d: "It has no purpose",
        correct: "b",
    },
    {
        question: "Which of the following is used to handle exceptions in JavaScript?",
        a: "catch",
        b: "try",
        c: "throw",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What is a closure in JavaScript?",
        a: "A function that is closed",
        b: "A function that remembers its outer variables",
        c: "A function that cannot be called",
        d: "A function that is not executed",
        correct: "b",
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
    window.location.href = "happy.html"; // Change this to your actual sidebar page URL
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