const quizData = [
    {
        question: "What does `console.log` do?",
        options: [
            "Prints to the console",
            "Creates a new console",
            "Saves a log file",
            "Displays an alert"
        ],
        answer: "Prints to the console"
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: [
            "Number",
            "String",
            "Boolean",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What is the correct syntax to create a function in JavaScript?",
        options: [
            "function myFunction()",
            "create myFunction()",
            "function:myFunction()",
            "myFunction: function()"
        ],
        answer: "function myFunction()"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        options: [
            "var myVar",
            "let myVar",
            "const myVar",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        options: [
            "=",
            "==",
            "===",
            ":"
        ],
        answer: "="
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const quizContainer = document.getElementById('quiz-container');


function loadQuestion() {
    const { question, options } = quizData[currentQuestionIndex];
    questionElement.textContent = question;

    
    optionsElement.innerHTML = '';

    
    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(option); 
        optionsElement.appendChild(optionDiv); 
    });
}


function selectOption(selectedOption) {
    if (selectedOption === quizData[currentQuestionIndex].answer) score++;
    currentQuestionIndex++;
    currentQuestionIndex < quizData.length ? loadQuestion() : showResult();
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `${score} out of ${quizData.length}`;
}


document.getElementById('next-btn').addEventListener('click', loadQuestion);
document.getElementById('restart-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    loadQuestion();
});


loadQuestion();
